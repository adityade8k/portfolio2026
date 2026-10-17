import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import pagesData from './data/pages.json';
import { createBlock } from './core/blockFactory.js';
import { generateLayout } from './core/layoutEngine.js';
import { ModalManager } from './core/modalManager.js';
import { StateManager } from './core/stateManager.js';
import { TransitionManager } from './core/transitionManager.js';
import { getNewestProjectItems, getProjectNavigation, resolveCategoryPageId } from './core/projectNavigation.js';
import { createProjectGallery, getProjectTilePosition, getProjectNavigationBlocks } from './core/projectGallery.js';
import { InfiniteGrid } from './core/infiniteGrid.js';

const canvas = document.querySelector('#scene');
const cameraDebugOverlay = createCameraDebugOverlay();
const isMobile = window.innerWidth < 768;
const fallbackPageId = 'home';
const fillerRings = 0;
const floorY = -0.0002;
const maxDevicePixelRatio = 3;
const defaultCameraConfig = {
  mobile: {
    cameraY: 8.2,
    polarAngleDegrees: 40,
    azimuthAngleDegrees: 32,
    viewSize: 22,
    position: new THREE.Vector3(2, 8.2, 5),
    zoom: 0.01,
    target: new THREE.Vector3(0, 0, 0),
  },
  desktop: {
    cameraY: 6.2,
    polarAngleDegrees: 40,
    azimuthAngleDegrees: 25.8,
    viewSize: 8.8,
    position: new THREE.Vector3(3, 6.2, 6.2),
    zoom: 2,
    target: new THREE.Vector3(0, 0, 0),
  },
};
const panCameraConfig = {
  // polar is measured down from vertical; azimuth rotates around the scene.
  mobile: {
    viewSize: 17,
    cameraY: 8.2,
    polarAngleDegrees: 0.1,
    azimuthAngleDegrees: 0,
    targetY: 0,
  },
  desktop: {
    viewSize: 6.2,
    cameraY: 9.2,
    polarAngleDegrees: 2,
    azimuthAngleDegrees: 0,
    targetY: 0,
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
  minPolarAngle: THREE.MathUtils.degToRad(0.5),
  maxPolarAngle: THREE.MathUtils.degToRad(40),
  minAzimuthAngle: THREE.MathUtils.degToRad(-45),
  maxAzimuthAngle: THREE.MathUtils.degToRad(45),
  targetMin: new THREE.Vector3(-2.5, -0.4, -3.8),
  targetMax: new THREE.Vector3(2.5, 1.2, 3.8),
};

const initialTag = getTagFromUrl();
if (initialTag) {
  pagesData.pages.push(createTagProjectPage(initialTag, fallbackPageId));
}
const stateManager = new StateManager(pagesData, getInitialPageId());

let currentCameraViewSize = getCameraLayout().viewSize;

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

const camera = new THREE.OrthographicCamera(-2, 2, 2, -2, 0.1, 500);
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
  new THREE.PlaneGeometry(200, 200),
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
scene.add(keyLight.target);
const infiniteGrid = new InfiniteGrid();
scene.add(infiniteGrid);

const modalManager = new ModalManager();
const transitionManager = new TransitionManager({ floorY });
const textureLoader = new THREE.TextureLoader();
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const cameraResetTarget = new THREE.Vector3();
const cameraTextTarget = new THREE.Vector3();
const cameraTextOffset = new THREE.Vector3();
const cameraStartPosition = new THREE.Vector3();
const cameraEndPosition = new THREE.Vector3();
const cameraStartTarget = new THREE.Vector3();
const cameraEndTarget = new THREE.Vector3();
const cameraStartQuaternion = new THREE.Quaternion();
const cameraEndQuaternion = new THREE.Quaternion();
const cameraTargetObject = new THREE.Object3D();
const hitFaceNormal = new THREE.Vector3();
const cameraDebugOffset = new THREE.Vector3();
const cameraDebugSpherical = new THREE.Spherical();
const cameraResetThresholds = {
  position: 0.02,
  target: 0.02,
  rotationRadians: THREE.MathUtils.degToRad(0.25),
  viewSize: 0.001,
};
const projectsPerPage = 3;
const projectRowSlotCount = 5;

let projectsCarouselPage = 0;
let previousPageId = fallbackPageId;
let currentGroup = buildPageGroup(stateManager.getCurrentPage());
let hoveredMesh = null;
let cameraResetAnimationId = 0;
let isCameraResetting = false;
let isPageTransitioning = false;
let hasInitializedViewport = false;
let queuedNavigation = null;
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
  const layout = getCameraLayout(camera.zoom);

  const isGallery = Boolean(currentGroup.userData.categoryId);
  const viewSize = isGallery && hasInitializedViewport
    ? layout.viewSize
    : hasInitializedViewport ? currentCameraViewSize : layout.viewSize;
  applyCameraViewSize(viewSize, aspect);

  if (!hasInitializedViewport) {
    camera.position.copy(layout.position);
    camera.zoom = layout.zoom;
    controls.target.copy(layout.target);
    camera.lookAt(layout.target);
    hasInitializedViewport = true;
  }

  camera.updateProjectionMatrix();
  controls.update();

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxDevicePixelRatio));
  renderer.setSize(width, height);
}

function animate() {
  if (!isCameraResetting && !isPageTransitioning) {
    clampControlsTarget();
    controls.update();
  }
  updateCameraDebugOverlay();
  // The light and floor travel with the viewport along the full gallery.
  floor.position.x = controls.target.x;
  floor.position.z = controls.target.z;
  keyLight.position.set(controls.target.x + 4, 8, controls.target.z + 6);
  keyLight.target.position.set(controls.target.x, 0, controls.target.z);
  infiniteGrid.update(camera);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
resize();
animate();

function buildPageGroup(page) {
  const projectNavigation = getProjectNavigation(pagesData.pages, page.id);
  if (projectNavigation) {
    const backTarget = previousPageId.startsWith('tag:') ? previousPageId : fallbackPageId;
    const gallery = createProjectGallery(pagesData.pages, projectNavigation.categoryId, (projectPage, navigation) =>
      buildSinglePageGroup({
        ...projectPage,
        projectNavigation: { ...navigation, backTarget },
      }, { galleryTile: true }),
    );
    for (const [pageId, tile] of gallery.userData.projectTiles) {
      const active = pageId === page.id;
      for (const block of getProjectNavigationBlocks(tile)) {
        block.userData.mesh.userData.skipPageTransition = !active;
        transitionManager.setGroupProgress(block, active ? 1 : 0);
      }
    }
    return gallery;
  }

  return buildSinglePageGroup(page);
}

function buildSinglePageGroup(page, { galleryTile = false } = {}) {
  const pageForLayout = isProjectListPage(page)
    ? createProjectsLayoutPage(page)
    : page;
  const layout = generateLayout(pageForLayout, { isMobile, fillerRings });
  const group = new THREE.Group();
  group.name = `page-${page.id}`;

  layout.forEach((blockData) => {
    group.add(createBlock(
      galleryTile ? { ...blockData, projectPageId: page.id } : blockData,
      textureLoader,
    ));
  });

  group.updateMatrixWorld(true);
  return group;
}

function createProjectsLayoutPage(page) {
  return {
    ...page,
    blocks: [...(page.blocks ?? []), ...createProjectCarouselBlocks(page)],
  };
}

function buildProjectDynamicGroups(page) {
  const layout = generateLayout(createProjectsLayoutPage(page), { isMobile, fillerRings });
  return layout
    .filter((blockData) => blockData.carouselDynamic)
    .map((blockData) => createBlock(blockData, textureLoader));
}

function createProjectCarouselBlocks(page) {
  const items = getNewestProjectItems(page);
  const pageCount = Math.max(1, Math.ceil(items.length / projectsPerPage));
  const pageIndex = clampIndex(projectsCarouselPage, pageCount);
  const visibleItems = items.slice(pageIndex * projectsPerPage, pageIndex * projectsPerPage + projectsPerPage);
  const rowSlots = pickProjectRowSlots(visibleItems.length);
  const blocks = [
    {
      id: 'projects-counter',
      type: 'content',
      subtype: 'text',
      carouselDynamic: true,
      placement: 'projectCounter',
      size: 'small',
      content: { text: `${pageIndex + 1}/${pageCount}`, fontWeight: 700, fontSize: 0.32 },
    },
  ];

  visibleItems.forEach((item, index) => {
    const row = rowSlots[index];
    const thumbnailOnLeft = Math.random() > 0.5;
    const groupOnRight = Math.random() > 0.5;
    const titlePlacement = getProjectTitlePlacement(row, { groupOnRight, thumbnailOnLeft });
    const thumbnailPlacement = getProjectThumbnailPlacement(row, { groupOnRight, thumbnailOnLeft });

    blocks.push(
      {
        id: `projects-${item.id}-title`,
        type: 'interaction',
        subtype: 'text',
        carouselDynamic: true,
        placement: titlePlacement,
        size: 'shortWide',
        content: { label: item.title, fontWeight: 400 },
        action: { type: 'state', target: item.target },
      },
      {
        id: `projects-${item.id}-thumb`,
        type: 'interaction',
        subtype: 'image',
        carouselDynamic: true,
        placement: thumbnailPlacement,
        size: 'small',
        content: {
          src: item.thumbnail,
          alt: `${item.title} thumbnail`,
        },
        action: { type: 'state', target: item.target },
      },
    );
  });

  return blocks;
}

async function goToPage(pageId, options = {}) {
  pageId = resolveCategoryPageId(pagesData.pages, pageId);
  if (transitionManager.isTransitioning || isPageTransitioning) {
    queuedNavigation = { pageId, options };
    return;
  }
  if (pageId === stateManager.currentPageId) {
    syncUrlToPage(pageId, { replace: options.replaceUrl ?? false });
    return;
  }

  const navigation = getProjectNavigation(pagesData.pages, pageId);
  const staysInGallery = navigation && currentGroup.userData.categoryId === navigation.categoryId;
  const lastPageId = stateManager.currentPageId;
  const nextPage = stateManager.goToPage(pageId);
  clearHover();
  if (!options.preservePrevious && !staysInGallery) {
    previousPageId = lastPageId;
  }
  syncUrlToPage(pageId, { replace: options.replaceUrl ?? false });

  const wasControlsEnabled = controls.enabled;
  controls.enabled = false;
  isPageTransitioning = true;

  try {
    if (staysInGallery) {
      // Lower only the navigation; the projects and background stay in place.
      const distance = controls.target.distanceTo(getCameraLayout().target);
      await transitionManager.transitionNavigation({
        oldControls: getProjectNavigationBlocks(currentGroup.userData.projectTiles.get(lastPageId)),
        newControls: getProjectNavigationBlocks(currentGroup.userData.projectTiles.get(pageId)),
        moveCamera: () => animateCameraToDefault(Math.min(1800, 650 + distance * 18)),
      });
    } else {
      currentGroup = await transitionManager.transitionToPage({
        oldGroup: currentGroup,
        newGroupFactory: () => buildPageGroup(nextPage),
        scene,
        onTransitionStart: ({ duration }) => animateCameraToDefault(duration),
      });
    }
  } finally {
    isPageTransitioning = false;
    controls.enabled = wasControlsEnabled;
    syncControlsToCamera();
    if (queuedNavigation) {
      const queued = queuedNavigation;
      queuedNavigation = null;
      void goToPage(queued.pageId, queued.options);
    }
  }
}

function handlePopState() {
  const pageId = getPageIdFromUrl();
  const tag = getTagFromUrl();

  if (tag) {
    stateManager.upsertPage(createTagProjectPage(tag, previousPageId));
    goToPage(getTagPageId(tag), { replaceUrl: true, preservePrevious: true });
    return;
  }

  if (pageId && stateManager.getPage(pageId)) {
    goToPage(pageId, { replaceUrl: true });
    return;
  }

  goToPage(fallbackPageId, { replaceUrl: true });
}

function handlePointerMove(event) {
  if (transitionManager.isTransitioning || isPageTransitioning) {
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
  if (transitionManager.isTransitioning || isPageTransitioning) {
    return;
  }

  const hit = getInteractiveHit(event);
  const blockData = hit?.object.userData.blockData;

  if (!blockData) {
    return;
  }

  if (blockData.projectPageId && blockData.projectPageId !== stateManager.currentPageId) {
    goToPage(blockData.projectPageId, { preservePrevious: true });
    return;
  }

  if (blockData.action?.type === 'state') {
    goToPage(blockData.action.target);
    return;
  }

  if (blockData.action?.type === 'project') {
    goToPage(blockData.action.target, { preservePrevious: true });
    return;
  }

  if (blockData.action?.type === 'tag') {
    goToTagPage(blockData.action.tag);
    return;
  }

  if (blockData.action?.type === 'back') {
    goToPage(blockData.action.target ?? previousPageId, { preservePrevious: true });
    return;
  }

  if (!isPlainTextBlock(blockData)) {
    animateCameraToDefault(getCameraLerpDuration());
  }

  if (blockData.type === 'moreInfo') {
    modalManager.openModal(blockData.modal);
    return;
  }

  if (isPlainTextBlock(blockData)) {
    animateCameraToTextBlock();
    return;
  }

  if (blockData.action?.type === 'carousel') {
    updateProjectsCarousel(blockData.action.direction);
    return;
  }

  if (blockData.action?.type === 'link') {
    window.open(blockData.action.url, '_blank', 'noopener,noreferrer');
  }
}

async function updateProjectsCarousel(direction) {
  if (transitionManager.isTransitioning || !isProjectListPage(stateManager.getCurrentPage())) {
    return;
  }

  const page = stateManager.getCurrentPage();
  const pageCount = Math.max(1, Math.ceil(getNewestProjectItems(page).length / projectsPerPage));

  if (pageCount <= 1) {
    return;
  }

  projectsCarouselPage = (projectsCarouselPage + direction + pageCount) % pageCount;
  clearHover();

  await transitionManager.replaceChildren({
    parent: currentGroup,
    oldChildren: currentGroup.children.filter((child) => child.userData.blockData?.carouselDynamic),
    newChildren: buildProjectDynamicGroups(page),
  });
}

function goToTagPage(tag) {
  const tagPage = createTagProjectPage(tag, stateManager.currentPageId);
  stateManager.upsertPage(tagPage);
  projectsCarouselPage = 0;
  goToPage(tagPage.id);
}

function createTagProjectPage(tag, backTarget = fallbackPageId) {
  const normalizedTag = normalizeTag(tag);
  const matchingItems = getAllProjectItems().filter((item) =>
    (item.tags ?? []).some((itemTag) => normalizeTag(itemTag) === normalizedTag),
  );

  return {
    id: getTagPageId(tag),
    template: 'projectList',
    title: tag.toUpperCase(),
    projectItems: matchingItems,
    blocks: [
      {
        id: `${getTagPageId(tag)}-back`,
        type: 'interaction',
        placement: 'topLeftStack1',
        size: 'small',
        content: { label: 'BACK', fontWeight: 700 },
        action: { type: 'back', target: backTarget },
      },
      {
        id: `${getTagPageId(tag)}-title`,
        type: 'content',
        subtype: 'header',
        placement: 'top',
        size: 'wide',
        content: { text: tag.toUpperCase(), fontWeight: 700 },
      },
      ...createProjectListNavBlocks(getTagPageId(tag)),
      {
        id: `${getTagPageId(tag)}-home`,
        type: 'interaction',
        placement: 'bottomCenter',
        size: 'small',
        content: { label: 'HOME', fontWeight: 700 },
        action: { type: 'state', target: 'home' },
      },
    ],
  };
}

function createProjectListNavBlocks(idPrefix) {
  return [
    {
      id: `${idPrefix}-prev`,
      type: 'interaction',
      placement: 'projectPrev',
      size: 'small',
      content: {
        label: 'PREV',
        fontWeight: 700,
        iconSrc: '/icons/arrow-left.svg',
      },
      action: { type: 'carousel', direction: -1 },
    },
    {
      id: `${idPrefix}-next`,
      type: 'interaction',
      placement: 'projectNext',
      size: 'small',
      content: {
        label: 'NEXT',
        fontWeight: 700,
        iconSrc: '/icons/arrow-right.svg',
      },
      action: { type: 'carousel', direction: 1 },
    },
  ];
}

function getInteractiveHit(event) {
  const rect = canvas.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);

  const hits = raycaster.intersectObjects(currentGroup.children, true);
  const blockHit = hits.find((hit) => hit.object.userData?.isBlockMesh && hit.object.scale.y > 0.01);

  if (!blockHit || !isTopFaceHit(blockHit)) {
    return null;
  }

  const blockData = blockHit.object.userData.blockData;
  const isNeighbor = blockData.projectPageId && blockData.projectPageId !== stateManager.currentPageId;
  return (isNeighbor && blockData.type !== 'filler') || blockData.type === 'interaction' || blockData.type === 'moreInfo' || isPlainTextBlock(blockData)
    ? blockHit
    : null;
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
  applyCameraViewSize(layout.viewSize);
  camera.position.copy(layout.position);
  camera.zoom = layout.zoom;
  camera.lookAt(layout.target);
}

function applyCameraViewSize(viewSize, aspect = window.innerWidth / window.innerHeight) {
  currentCameraViewSize = viewSize;
  camera.left = (-viewSize * aspect) / 2;
  camera.right = (viewSize * aspect) / 2;
  camera.top = viewSize / 2;
  camera.bottom = -viewSize / 2;
  camera.updateProjectionMatrix();
}

function getCameraLayout(currentZoom) {
  const device = window.innerWidth < 768 ? 'mobile' : 'desktop';
  const layout = defaultCameraConfig[device];
  const target = layout.target.clone();
  const projectNavigation = getProjectNavigation(pagesData.pages, stateManager.currentPageId);
  if (projectNavigation) {
    target.add(getProjectTilePosition(projectNavigation.index));
    target.y = 0.6;
  }
  const aspect = window.innerWidth / window.innerHeight;
  const initialZoom = Math.max(layout.zoom, cameraControlsConfig.minZoom);
  const framingZoom = currentZoom ?? initialZoom;
  const detailViewSize = Math.max(
    12.8 * framingZoom,
    (12.4 * framingZoom) / aspect,
  );
  const cameraOffset = getCameraOffsetFromAngles(layout);
  // Orthographic distance does not change zoom; this prevents the raised grid
  // from crossing the camera's near plane on tall screens.
  if (projectNavigation) cameraOffset.multiplyScalar(3);

  return {
    ...layout,
    // Keep the active project large; neighboring tiles continue outside the frame.
    viewSize: projectNavigation ? detailViewSize : layout.viewSize,
    target,
    position: target.clone().add(cameraOffset),
  };
}

function getPanCameraConfig() {
  return window.innerWidth < 768 ? panCameraConfig.mobile : panCameraConfig.desktop;
}

function getCameraOffsetFromAngles({ cameraY, polarAngleDegrees, azimuthAngleDegrees }) {
  const polarAngle = THREE.MathUtils.degToRad(polarAngleDegrees);
  const cameraRadius = cameraY / Math.max(0.001, Math.cos(polarAngle));

  return new THREE.Vector3().setFromSphericalCoords(
    cameraRadius,
    polarAngle,
    THREE.MathUtils.degToRad(azimuthAngleDegrees),
  );
}

function getInitialPageId() {
  const tag = getTagFromUrl();
  if (tag) {
    return getTagPageId(tag);
  }

  const pageId = getPageIdFromUrl();
  return pageId && pagesData.pages.some((page) => page.id === pageId)
    ? resolveCategoryPageId(pagesData.pages, pageId)
    : fallbackPageId;
}

function getPageIdFromUrl() {
  const hashPath = window.location.hash.replace(/^#\/?/, '');
  if (hashPath) {
    return decodeURIComponent(hashPath.split('/')[0]);
  }

  return null;
}

function getTagFromUrl() {
  const pageId = getPageIdFromUrl();

  if (!pageId?.startsWith('tag:')) {
    return null;
  }

  return pageId.slice(4);
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

function clampIndex(index, count) {
  return Math.max(0, Math.min(count - 1, index));
}

function pickProjectRowSlots(count) {
  const slots = Array.from({ length: projectRowSlotCount }, (_, index) => index + 1);

  for (let index = slots.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [slots[index], slots[swapIndex]] = [slots[swapIndex], slots[index]];
  }

  return slots.slice(0, count).sort((a, b) => a - b);
}

function getProjectTitlePlacement(row, { groupOnRight, thumbnailOnLeft }) {
  if (groupOnRight && thumbnailOnLeft) {
    return `projectRow${row}TitleFarRight`;
  }

  if (thumbnailOnLeft || groupOnRight) {
    return `projectRow${row}TitleRight`;
  }

  return `projectRow${row}Title`;
}

function getProjectThumbnailPlacement(row, { groupOnRight, thumbnailOnLeft }) {
  if (groupOnRight && thumbnailOnLeft) {
    return `projectRow${row}ThumbLeftInset`;
  }

  if (groupOnRight) {
    return `projectRow${row}ThumbFarRight`;
  }

  if (thumbnailOnLeft) {
    return `projectRow${row}ThumbLeft`;
  }

  return `projectRow${row}Thumb`;
}

function isProjectListPage(page) {
  return page?.id === 'projects' || page?.template === 'projectList';
}

function getAllProjectItems() {
  const allItems = pagesData.pages
    .filter(isProjectListPage)
    .flatMap((page) => getNewestProjectItems(page));
  const uniqueItems = [...new Map(allItems.map((item) => [item.target, item])).values()];

  return uniqueItems.map((item) => {
    const detailPage = pagesData.pages.find((page) => page.id === item.target);
    return {
      ...item,
      tags: detailPage?.projectDetails?.tags ?? item.tags ?? [],
    };
  });
}

function normalizeTag(tag) {
  return String(tag)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getTagPageId(tag) {
  return `tag:${normalizeTag(tag)}`;
}

function animateCameraToDefault(duration) {
  return animateCameraToLayout(getCameraLayout(camera.zoom), duration);
}

function animateCameraToTextBlock() {
  const config = getPanCameraConfig();
  const polarAngle = THREE.MathUtils.degToRad(config.polarAngleDegrees);
  const cameraRadius = config.cameraY / Math.max(0.001, Math.cos(polarAngle));

  cameraTextTarget.copy(getCameraLayout().target);
  cameraTextTarget.y = config.targetY;

  cameraTextOffset.setFromSphericalCoords(
    cameraRadius,
    polarAngle,
    THREE.MathUtils.degToRad(config.azimuthAngleDegrees),
  );

  return animateCameraToLayout(
    {
      viewSize: config.viewSize,
      position: cameraTextTarget.clone().add(cameraTextOffset),
      target: cameraTextTarget.clone(),
    },
    getCameraLerpDuration(),
  );
}

function animateCameraToLayout(layout, duration) {
  const startViewSize = currentCameraViewSize;
  const endViewSize = layout.viewSize ?? startViewSize;

  cameraStartPosition.copy(camera.position);
  cameraEndPosition.copy(layout.position);
  cameraStartTarget.copy(controls.target);
  cameraEndTarget.copy(layout.target);
  cameraStartQuaternion.copy(camera.quaternion);
  cameraTargetObject.position.copy(layout.position);
  cameraTargetObject.lookAt(layout.target);
  cameraEndQuaternion.copy(cameraTargetObject.quaternion);

  if (!hasCameraMovedToLayout(startViewSize, endViewSize)) {
    return Promise.resolve();
  }

  cameraResetAnimationId += 1;
  const animationId = cameraResetAnimationId;
  const start = performance.now();

  isCameraResetting = true;

  return new Promise((resolve) => {
    const finish = () => {
      camera.position.copy(cameraEndPosition);
      controls.target.copy(cameraEndTarget);
      camera.lookAt(cameraEndTarget);
      applyCameraViewSize(endViewSize);
      isCameraResetting = false;
      resolve();
    };

    const tick = (now) => {
      if (animationId !== cameraResetAnimationId) {
        resolve();
        return;
      }

      const progress = Math.min(1, (now - start) / Math.max(1, duration));
      const eased = easeInOutCubic(progress);

      camera.position.lerpVectors(cameraStartPosition, cameraEndPosition, eased);
      cameraResetTarget.lerpVectors(cameraStartTarget, cameraEndTarget, eased);
      controls.target.copy(cameraResetTarget);
      camera.lookAt(cameraResetTarget);
      applyCameraViewSize(THREE.MathUtils.lerp(startViewSize, endViewSize, eased));

      if (progress >= 1) {
        finish();
        return;
      }

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });
}

function hasCameraMovedToLayout(startViewSize, endViewSize) {
  const rotationDelta = 2 * Math.acos(Math.min(1, Math.abs(cameraStartQuaternion.dot(cameraEndQuaternion))));

  return (
    cameraStartPosition.distanceTo(cameraEndPosition) > cameraResetThresholds.position ||
    cameraStartTarget.distanceTo(cameraEndTarget) > cameraResetThresholds.target ||
    rotationDelta > cameraResetThresholds.rotationRadians ||
    Math.abs(startViewSize - endViewSize) > cameraResetThresholds.viewSize
  );
}

function getCameraLerpDuration() {
  if (currentGroup.userData.categoryId) return 800;
  return transitionManager.overlapDelay + transitionManager.getGroupAnimationDuration(currentGroup);
}

function isPlainTextBlock(blockData) {
  return blockData.type === 'content' && blockData.subtype === 'text';
}

function isTopFaceHit(hit) {
  if (!hit.object.userData?.isBlockMesh || !hit.face) {
    return false;
  }

  hitFaceNormal.copy(hit.face.normal).transformDirection(hit.object.matrixWorld);
  return hitFaceNormal.y > 0.9;
}

function syncControlsToCamera() {
  const wasDampingEnabled = controls.enableDamping;
  controls.enableDamping = false;
  controls.update();
  controls.enableDamping = wasDampingEnabled;
}

function clampControlsTarget() {
  const navigation = getProjectNavigation(pagesData.pages, stateManager.currentPageId);
  const origin = navigation ? getProjectTilePosition(navigation.index) : defaultCameraConfig.desktop.target;
  controls.target.x = THREE.MathUtils.clamp(
    controls.target.x,
    origin.x + cameraControlsConfig.targetMin.x,
    origin.x + cameraControlsConfig.targetMax.x,
  );
  controls.target.y = THREE.MathUtils.clamp(
    controls.target.y,
    cameraControlsConfig.targetMin.y,
    cameraControlsConfig.targetMax.y,
  );
  controls.target.z = THREE.MathUtils.clamp(
    controls.target.z,
    origin.z + cameraControlsConfig.targetMin.z,
    origin.z + cameraControlsConfig.targetMax.z,
  );
}

function createCameraDebugOverlay() {
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.right = '12px';
  overlay.style.top = '12px';
  overlay.style.zIndex = '20';
  overlay.style.padding = '8px 10px';
  overlay.style.background = 'rgba(17, 17, 17, 0.78)';
  overlay.style.color = '#f7f3e8';
  overlay.style.fontFamily = 'monospace';
  overlay.style.fontSize = '12px';
  overlay.style.lineHeight = '1.45';
  overlay.style.pointerEvents = 'none';
  overlay.style.whiteSpace = 'pre';
  document.body.appendChild(overlay);
  return overlay;
}

function updateCameraDebugOverlay() {
  cameraDebugOffset.copy(camera.position).sub(controls.target);
  cameraDebugSpherical.setFromVector3(cameraDebugOffset);

  cameraDebugOverlay.textContent = [
    `polarAngleDegrees: ${THREE.MathUtils.radToDeg(cameraDebugSpherical.phi).toFixed(2)}`,
    `azimuthAngleDegrees: ${THREE.MathUtils.radToDeg(cameraDebugSpherical.theta).toFixed(2)}`,
  ].join('\n');
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
