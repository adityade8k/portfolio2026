import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { Text } from 'troika-three-text';
import { isDarkColor } from './utils.js';

const textureCache = new Map();
const svgDataUrlCache = new Map();
const svgPathCache = new Map();
const FONT_FILES_BY_WEIGHT = [
  { max: 350, url: '/fonts/UniversLight.ttf', weight: 300 },
  { max: 550, url: '/fonts/UniversRegular.ttf', weight: 400 },
  { max: Infinity, url: '/fonts/UniversBold.ttf', weight: 700 },
];

export function createBlock(blockData, textureLoader) {
  const group = new THREE.Group();
  group.userData.blockData = blockData;

  const geometry = new THREE.BoxGeometry(blockData.worldW, blockData.height, blockData.worldD);
  const material = new THREE.MeshStandardMaterial({
    color: blockData.color,
    roughness: 0.64,
    metalness: 0.02,
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 1,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = blockData.height / 2;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData.blockData = blockData;
  mesh.userData.isBlockMesh = true;
  mesh.userData.originalHeight = blockData.height;
  mesh.userData.originalY = blockData.height / 2;
  group.add(mesh);

  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(geometry),
    new THREE.LineBasicMaterial({ color: 0x111111 }),
  );
  edges.renderOrder = 2;
  mesh.add(edges);

  const topContent = createTopContent(blockData, textureLoader);
  if (topContent) {
    mesh.add(topContent);
  }

  group.position.set(blockData.worldX, 0, blockData.worldZ);
  group.userData.mesh = mesh;
  group.userData.blockData = blockData;

  return group;
}

function createTopContent(blockData, textureLoader) {
  if (blockData.type === 'filler') {
    return null;
  }

  if (blockData.content?.iconSrc) {
    return createIconContent(blockData, textureLoader);
  }

  if (blockData.subtype === 'image' && blockData.content?.src) {
    return createImagePlane(blockData, textureLoader);
  }

  return createTextLabel(blockData);
}

function createIconContent(blockData, textureLoader) {
  const group = new THREE.Group();
  const fallbackText = createTextLabel(blockData);

  if (fallbackText) {
    group.add(fallbackText);
  }

  createSvgIcon(blockData)
    .then((icon) => {
      if (fallbackText) {
        fallbackText.visible = false;
      }
      group.add(icon);
    })
    .catch(() => {
      if (fallbackText) {
        fallbackText.visible = true;
      }
    });

  return group;
}

async function createSvgIcon(blockData) {
  const src = blockData.content.iconSrc;
  const svgData = await loadSvgData(src);
  const icon = new THREE.Group();
  const material = new THREE.MeshBasicMaterial({
    color: getIconColor(blockData.color),
    side: THREE.DoubleSide,
    depthWrite: false,
    toneMapped: false,
  });

  svgData.paths.forEach((path) => {
    SVGLoader.createShapes(path).forEach((shape) => {
      const geometry = new THREE.ShapeGeometry(shape);
      const mesh = new THREE.Mesh(geometry, material);
      icon.add(mesh);
    });
  });

  const bounds = new THREE.Box3().setFromObject(icon);
  const size = bounds.getSize(new THREE.Vector3());
  const center = bounds.getCenter(new THREE.Vector3());
  const maxIconW = blockData.worldW * 0.34;
  const maxIconD = blockData.worldD * 0.34;
  const scale = Math.min(maxIconW / Math.max(size.x, 0.001), maxIconD / Math.max(size.y, 0.001));

  icon.children.forEach((child) => {
    child.geometry.translate(-center.x, -center.y, 0);
  });
  icon.scale.set(scale, -scale, scale);
  icon.rotation.x = -Math.PI / 2;
  icon.position.set(0, blockData.height / 2 + 0.03, 0);
  icon.renderOrder = 3;

  return icon;
}

function loadSvgData(src) {
  if (svgPathCache.has(src)) {
    return svgPathCache.get(src);
  }

  const loader = new SVGLoader();
  const promise = new Promise((resolve, reject) => {
    loader.load(src, resolve, undefined, reject);
  });

  svgPathCache.set(src, promise);
  return promise;
}

function createTextLabel(blockData) {
  const label = blockData.content?.label ?? blockData.content?.text ?? '';
  if (!label) {
    return null;
  }

  const text = new Text();
  text.text = label;
  text.font = getFontUrl(blockData);
  text.fontWeight = getFontWeight(blockData);
  text.fontSize = getFontSize(blockData);
  text.maxWidth = Math.max(0.2, blockData.worldW - 0.28);
  text.textAlign = 'center';
  text.color = getTextColor(blockData.color);
  text.anchorX = 'center';
  text.anchorY = 'middle';
  text.position.set(0, blockData.height / 2 + 0.018, 0);
  text.rotation.x = -Math.PI / 2;
  text.sync();

  return text;
}

function getTextColor(color) {
  const value = new THREE.Color(color);
  const isRedBlock = value.r > 0.55 && value.g < 0.35 && value.b < 0.3;

  if (isRedBlock) {
    return 0x111111;
  }

  return isDarkColor(color) ? 0xf7f3e8 : 0x111111;
}

function getFontUrl(blockData) {
  const fontWeight = getFontWeight(blockData);
  return FONT_FILES_BY_WEIGHT.find((font) => fontWeight <= font.max).url;
}

function getFontWeight(blockData) {
  return Number(blockData.content?.fontWeight ?? blockData.fontWeight ?? getDefaultFontWeight(blockData));
}

function getDefaultFontWeight(blockData) {
  if (blockData.subtype === 'header' || blockData.type === 'interaction' || blockData.type === 'moreInfo') {
    return 700;
  }

  return 400;
}

function createImagePlane(blockData, textureLoader, options = {}) {
  const src = options.src ?? blockData.content.src;
  const scale = options.scale ?? 0.88;
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(blockData.worldW * scale, blockData.worldD * scale),
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: options.transparent ?? false,
      alphaTest: options.transparent ? 0.08 : 0,
      depthWrite: options.transparent ? false : true,
      toneMapped: false,
      side: THREE.DoubleSide,
    }),
  );
  plane.rotation.x = -Math.PI / 2;
  plane.position.set(0, blockData.height / 2 + 0.024, 0);

  loadTexture(src, textureLoader, options)
    .then((texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      if (options.fit === 'contain') {
        applyContainFit(texture, blockData.worldW, blockData.worldD);
      } else {
        applyCoverCrop(texture, blockData.worldW, blockData.worldD);
      }
      plane.material.map = texture;
      plane.material.needsUpdate = true;
      plane.visible = true;
      if (plane.userData.fallbackText) {
        plane.userData.fallbackText.visible = false;
      }
    })
    .catch(() => {
      plane.material.color.set(0xd8d2c4);
    });

  return plane;
}

function loadTexture(src, textureLoader, options = {}) {
  const cacheKey = options.tint ? `${src}:${options.tint}` : src;

  if (textureCache.has(cacheKey)) {
    return textureCache.get(cacheKey);
  }

  const promise = getTextureSrc(src, options).then(
    (textureSrc) =>
      new Promise((resolve, reject) => {
        textureLoader.load(textureSrc, resolve, undefined, reject);
      }),
  );
  textureCache.set(cacheKey, promise);
  return promise;
}

function getTextureSrc(src, options) {
  if (!options.tint || !src.endsWith('.svg')) {
    return Promise.resolve(src);
  }

  const cacheKey = `${src}:${options.tint}`;
  if (svgDataUrlCache.has(cacheKey)) {
    return svgDataUrlCache.get(cacheKey);
  }

  const promise = fetch(src)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load SVG icon: ${src}`);
      }
      return response.text();
    })
    .then((svgText) => {
      const tintedSvg = tintSvg(svgText, options.tint);
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(tintedSvg)}`;
    });

  svgDataUrlCache.set(cacheKey, promise);
  return promise;
}

function tintSvg(svgText, color) {
  const hasFill = /\sfill=/.test(svgText);
  const hasStroke = /\sstroke=/.test(svgText);
  let tinted = svgText
    .replace(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
    .replace(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`);

  if (!hasFill && !hasStroke) {
    tinted = tinted.replace('<svg', `<svg fill="${color}"`);
  }

  return tinted;
}

function getIconColor(color) {
  const value = new THREE.Color(color);
  const isBlueBlock = value.b > 0.45 && value.r < 0.35;

  if (isBlueBlock || isDarkColor(color)) {
    return '#f7f3e8';
  }

  return '#111111';
}

function applyCoverCrop(texture, width, depth) {
  const image = texture.image;
  if (!image?.width || !image?.height) {
    return;
  }

  const imageAspect = image.width / image.height;
  const planeAspect = width / depth;

  texture.center.set(0.5, 0.5);

  if (imageAspect > planeAspect) {
    texture.repeat.set(planeAspect / imageAspect, 1);
  } else {
    texture.repeat.set(1, imageAspect / planeAspect);
  }
}

function applyContainFit(texture, width, depth) {
  const image = texture.image;
  if (!image?.width || !image?.height) {
    return;
  }

  const imageAspect = image.width / image.height;
  const planeAspect = width / depth;

  texture.center.set(0.5, 0.5);

  if (imageAspect > planeAspect) {
    texture.repeat.set(1, imageAspect / planeAspect);
  } else {
    texture.repeat.set(planeAspect / imageAspect, 1);
  }
}

function getFontSize(blockData) {
  if (blockData.subtype === 'header') {
    return Math.min(0.44, blockData.worldW * 0.18);
  }

  if (blockData.type === 'interaction' || blockData.type === 'moreInfo') {
    return Math.min(0.28, blockData.worldW * 0.16);
  }

  return Math.min(0.22, blockData.worldW * 0.12);
}
