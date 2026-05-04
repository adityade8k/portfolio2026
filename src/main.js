import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import pagesData from './data/pages.json';
import { createBlock } from './core/blockFactory.js';
import { generateLayout } from './core/layoutEngine.js';
import { ModalManager } from './core/modalManager.js';
import { StateManager } from './core/stateManager.js';
import { TransitionManager } from './core/transitionManager.js';

const canvas = document.querySelector('#scene');
const isMobile = window.innerWidth < 768;
const fallbackPageId = 'home';
const fillerRings = 7;
const floorY = -0.0002;
const maxDevicePixelRatio = 3;
const cameraLayoutConfig = {
  mobile: {
    viewSize: 22,
    position: new THREE.Vector3(2, 8.2, 5),
    zoom: 0.01,
    target: new THREE.Vector3(0, 0, 0),
  },
  desktop: {
    viewSize: 8.8,
    position: new THREE.Vector3(3, 6.2, 6.2),
    zoom: 2,
    target: new THREE.Vector3(0, 0, 0),
  },
};
const cameraControlsConfig = {
  enabled: true,
  enableRotate: true,
  enablePan: true,
  enableZoom: true,
  damping: 0.08,
  minZoom: 1.2,
  maxZoom: 4,
  minPolarAngle: THREE.MathUtils.degToRad(34),
  maxPolarAngle: THREE.MathUtils.degToRad(48),
  minAzimuthAngle: THREE.MathUtils.degToRad(-42),
  maxAzimuthAngle: THREE.MathUtils.degToRad(42),
  targetMin: new THREE.Vector3(-2.5, -0.4, -3.8),
  targetMax: new THREE.Vector3(2.5, 1.2, 3.8),
};

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf3f0e8);

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxDevicePixelRatio));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100);
applyCameraLayout();

const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = cameraControlsConfig.enabled;
controls.enableDamping = true;
controls.dampingFactor = cameraControlsConfig.damping;
controls.enableRotate = cameraControlsConfig.enableRotate;
controls.enablePan = cameraControlsConfig.enablePan;
controls.enableZoom = cameraControlsConfig.enableZoom;
controls.minZoom = cameraControlsConfig.minZoom;
controls.maxZoom = cameraControlsConfig.maxZoom;
controls.minPolarAngle = cameraControlsConfig.minPolarAngle;
controls.maxPolarAngle = cameraControlsConfig.maxPolarAngle;
controls.minAzimuthAngle = cameraControlsConfig.minAzimuthAngle;
controls.maxAzimuthAngle = cameraControlsConfig.maxAzimuthAngle;
controls.target.copy(getCameraLayout().target);
controls.update();

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(58, 58),
  new THREE.MeshStandardMaterial({
    color: 0xf3f0e8,
    roughness: 0.82,
    metalness: 0,
  }),
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = floorY;
floor.receiveShadow = true;
scene.add(floor);

scene.add(new THREE.HemisphereLight(0xffffff, 0xd8cfc0, 2.4));

const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
keyLight.position.set(4, 8, 6);
keyLight.castShadow = true;
keyLight.shadow.camera.left = -8;
keyLight.shadow.camera.right = 8;
keyLight.shadow.camera.top = 8;
keyLight.shadow.camera.bottom = -8;
keyLight.shadow.mapSize.set(1024, 1024);
scene.add(keyLight);

const stateManager = new StateManager(pagesData, getInitialPageId());
const modalManager = new ModalManager();
const transitionManager = new TransitionManager({ floorY });
const textureLoader = new THREE.TextureLoader();
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

let currentGroup = buildPageGroup(stateManager.getCurrentPage());
let hoveredMesh = null;
scene.add(currentGroup);

canvas.addEventListener('pointermove', handlePointerMove);
canvas.addEventListener('pointerleave', clearHover);
canvas.addEventListener('pointerdown', handlePointerDown);
window.addEventListener('popstate', handlePopState);
syncUrlToPage(stateManager.currentPageId, { replace: true });

function resize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const aspect = width / height;
  const layout = getCameraLayout();

  camera.left = (-layout.viewSize * aspect) / 2;
  camera.right = (layout.viewSize * aspect) / 2;
  camera.top = layout.viewSize / 2;
  camera.bottom = -layout.viewSize / 2;
  camera.position.copy(layout.position);
  camera.zoom = layout.zoom;
  controls.target.copy(layout.target);
  camera.lookAt(layout.target);
  camera.updateProjectionMatrix();
  controls.update();

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxDevicePixelRatio));
  renderer.setSize(width, height);
}

function animate() {
  clampControlsTarget();
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
resize();
animate();

function buildPageGroup(page) {
  const layout = generateLayout(page, { isMobile, fillerRings });
  const group = new THREE.Group();
  group.name = `page-${page.id}`;

  layout.forEach((blockData) => {
    group.add(createBlock(blockData, textureLoader));
  });

  group.updateMatrixWorld(true);
  return group;
}

async function goToPage(pageId, options = {}) {
  if (transitionManager.isTransitioning || pageId === stateManager.currentPageId) {
    return;
  }

  const nextPage = stateManager.goToPage(pageId);
  clearHover();
  syncUrlToPage(pageId, { replace: options.replaceUrl ?? false });

  currentGroup = await transitionManager.transitionToPage({
    oldGroup: currentGroup,
    newGroupFactory: () => buildPageGroup(nextPage),
    scene,
  });
}

function handlePopState() {
  const pageId = getPageIdFromUrl();

  if (pageId && stateManager.getPage(pageId)) {
    goToPage(pageId, { replaceUrl: true });
    return;
  }

  goToPage(fallbackPageId, { replaceUrl: true });
}

function handlePointerMove(event) {
  if (transitionManager.isTransitioning) {
    return;
  }

  const hit = getInteractiveHit(event);

  if (hit?.object === hoveredMesh) {
    return;
  }

  clearHover();

  if (hit) {
    hoveredMesh = hit.object;
    hoveredMesh.scale.x = 1.025;
    hoveredMesh.scale.z = 1.025;
    document.body.style.cursor = 'pointer';
  }
}

function handlePointerDown(event) {
  if (transitionManager.isTransitioning) {
    return;
  }

  const hit = getInteractiveHit(event);
  const blockData = hit?.object.userData.blockData;

  if (!blockData) {
    return;
  }

  if (blockData.type === 'moreInfo') {
    modalManager.openModal(blockData.modal);
    return;
  }

  if (blockData.action?.type === 'state') {
    goToPage(blockData.action.target);
    return;
  }

  if (blockData.action?.type === 'link') {
    window.open(blockData.action.url, '_blank', 'noopener,noreferrer');
  }
}

function getInteractiveHit(event) {
  const rect = canvas.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);

  const hits = raycaster.intersectObjects(currentGroup.children, true);
  return hits.find((hit) => {
    const blockData = hit.object.userData?.blockData;
    return blockData?.type === 'interaction' || blockData?.type === 'moreInfo';
  });
}

function clearHover() {
  if (hoveredMesh) {
    hoveredMesh.scale.x = 1;
    hoveredMesh.scale.z = 1;
    hoveredMesh = null;
  }
  document.body.style.cursor = '';
}

function applyCameraLayout() {
  const layout = getCameraLayout();
  camera.position.copy(layout.position);
  camera.zoom = layout.zoom;
  camera.lookAt(layout.target);
}

function getCameraLayout() {
  return window.innerWidth < 768 ? cameraLayoutConfig.mobile : cameraLayoutConfig.desktop;
}

function getInitialPageId() {
  const pageId = getPageIdFromUrl();
  return pageId && pagesData.pages.some((page) => page.id === pageId) ? pageId : fallbackPageId;
}

function getPageIdFromUrl() {
  const hashPath = window.location.hash.replace(/^#\/?/, '');
  if (hashPath) {
    return decodeURIComponent(hashPath.split('/')[0]);
  }

  return null;
}

function syncUrlToPage(pageId, { replace = false } = {}) {
  const targetHash = pageId === fallbackPageId ? '#/' : `#/${encodeURIComponent(pageId)}`;
  const targetUrl = `${window.location.pathname}${window.location.search}${targetHash}`;

  if (`${window.location.pathname}${window.location.search}${window.location.hash}` === targetUrl) {
    return;
  }

  if (replace) {
    window.history.replaceState({ pageId }, '', targetUrl);
  } else {
    window.history.pushState({ pageId }, '', targetUrl);
  }
}

function resetControlsTarget() {
  controls.target.copy(getCameraLayout().target);
  clampControlsTarget();
  controls.update();
}

function clampControlsTarget() {
  controls.target.x = THREE.MathUtils.clamp(
    controls.target.x,
    cameraControlsConfig.targetMin.x,
    cameraControlsConfig.targetMax.x,
  );
  controls.target.y = THREE.MathUtils.clamp(
    controls.target.y,
    cameraControlsConfig.targetMin.y,
    cameraControlsConfig.targetMax.y,
  );
  controls.target.z = THREE.MathUtils.clamp(
    controls.target.z,
    cameraControlsConfig.targetMin.z,
    cameraControlsConfig.targetMax.z,
  );
}
