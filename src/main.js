import './style.css';
import './cricketDetails.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import pagesData from './data/pages.json';
import { createBlock } from './core/blockFactory.js';
import { generateLayout } from './core/layoutEngine.js';
import { ModalManager } from './core/modalManager.js';
import { StateManager } from './core/stateManager.js';
import { TransitionManager } from './core/transitionManager.js';
import { getNewestProjectItems, getProjectNavigation, resolveCategoryPageId } from './core/projectNavigation.js';
import { createProjectGallery, getProjectTilePosition, recordProjectVisit, getGalleryReturnPlan } from './core/projectGallery.js';
import { InfiniteGrid, getBlockFootprints } from './core/infiniteGrid.js';
import { DEFAULT_CAMERA, getCameraDevice, getViewportCameraFrame, getTopDownCameraLayout, getResizedViewSize, getSceneCameraOffset } from './core/cameraFraming.js';
import { hasBlockAction, ReadingDrag, ContinuedOrbitDrag } from './core/readingView.js';
import { getProjectTags, normalizeTag } from './core/projectTags.js';
import { createTagsPage } from './core/tagDirectory.js';

const canvas = document.querySelector('#scene');
const cameraDebugOverlay = createCameraDebugOverlay();
const fallbackPageId = 'home';
const fillerRings = 0;
const floorY = -0.0002;
const transitionTimeScale = 0.7;
const blockSwapDurationScale = 0.3 / 0.7;
const blockTransitionTimeScale = transitionTimeScale * blockSwapDurationScale;
const pageSwapTimeScale = 1 / 1.5;
const cameraTravelTimeScale = 0.7;
const maxDevicePixelRatio = 3;
const projectsPerPage = 3;
const projectRowSlotCount = 5;
const defaultCameraConfig = {
  mobile: {
    ...DEFAULT_CAMERA,
    target: new THREE.Vector3(0, 0, 0),
  },
  desktop: {
    ...DEFAULT_CAMERA,
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
  minPolarAngle: THREE.MathUtils.degToRad(0.5),
  maxPolarAngle: THREE.MathUtils.degToRad(40),
  minAzimuthAngle: THREE.MathUtils.degToRad(-45),
  maxAzimuthAngle: THREE.MathUtils.degToRad(45),
  targetMin: new THREE.Vector3(-2.5, -0.4, -3.8),
  targetMax: new THREE.Vector3(2.5, 1.2, 3.8),
};

const initialHistoryState = window.history.state ?? {};
restoreNavigationPages(initialHistoryState, getPageIdFromUrl(), (page) => {
  const index = pagesData.pages.findIndex((candidate) => candidate.id === page.id);
  if (index < 0) pagesData.pages.push(page);
  else pagesData.pages[index] = page;
});
const initialOverlayPageId = pagesData.pages.find((page) => page.id === getPageIdFromUrl() && page.template === 'overlay')?.id;
const stateManager = new StateManager(pagesData, getInitialPageId());

let currentCameraViewSize = getCameraLayout().viewSize;
let viewportBaseViewSize = currentCameraViewSize;
let viewportCameraDevice = getCurrentCameraDevice();

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
    color: 0x000000,
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
const transitionManager = new TransitionManager({ floorY, timeScale: blockTransitionTimeScale, pageTimeScale: pageSwapTimeScale });
const textureLoader = new THREE.TextureLoader();
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const cameraResetTarget = new THREE.Vector3();
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
let projectsCarouselPage = 0;
let previousPageId = fallbackPageId;
let galleryBackTarget = getSavedGalleryBackTarget(initialHistoryState);
let currentGroup = buildPageGroup(stateManager.getCurrentPage());
let hoveredMesh = null;
let cameraResetAnimationId = 0;
let isCameraResetting = false;
let isPageTransitioning = false;
let hasInitializedViewport = false;
let queuedNavigation = null;
let cameraViewMode = 'default';
let readingLayout = null;
let pointerGesture = null;
let activeOverlayPageId = null;
scene.add(currentGroup);
infiniteGrid.setExclusions(getBlockFootprints([currentGroup]));

// Capture reading gestures before OrbitControls can rotate or pan the camera.
canvas.addEventListener('pointermove', handlePointerMove, true);
canvas.addEventListener('pointerleave', clearHover);
canvas.addEventListener('pointerdown', handlePointerDown, true);
canvas.addEventListener('pointerup', handlePointerUp, true);
canvas.addEventListener('pointercancel', handlePointerCancel, true);
canvas.addEventListener('lostpointercapture', handlePointerCancel);
window.addEventListener('popstate', handlePopState);
if (!initialOverlayPageId) syncUrlToPage(stateManager.currentPageId, { replace: true, historyState: getNavigationHistoryState() });

function resize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const aspect = width / height;
  const defaultLayout = getCameraLayout();
  const layout = cameraViewMode === 'top' ? getReadingCameraLayout() : defaultLayout;
  const device = getCurrentCameraDevice();
  const cameraDeviceChanged = device !== viewportCameraDevice;
  const viewSize = hasInitializedViewport && !cameraDeviceChanged && cameraViewMode !== 'top'
    ? getResizedViewSize(currentCameraViewSize, viewportBaseViewSize, layout.viewSize)
    : layout.viewSize;
  viewportBaseViewSize = defaultLayout.viewSize;
  viewportCameraDevice = device;
  applyCameraViewSize(viewSize, aspect);

  if (!hasInitializedViewport || cameraDeviceChanged || cameraViewMode === 'top') {
    camera.position.copy(layout.position);
    camera.zoom = layout.zoom;
    controls.target.copy(layout.target);
    camera.lookAt(layout.target);
    hasInitializedViewport = true;
    if (cameraViewMode === 'top') readingLayout = layout;
  }

  camera.updateProjectionMatrix();
  controls.update();

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxDevicePixelRatio));
  renderer.setSize(width, height);
}

function animate() {
  if (!activeOverlayPageId && !isCameraResetting && !isPageTransitioning && cameraViewMode === 'default' && !pointerGesture?.returning) {
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
if (initialOverlayPageId) openPageOverlay(initialOverlayPageId, { replaceUrl: true });
animate();

function buildPageGroup(page) {
  const projectNavigation = getProjectNavigation(pagesData.pages, page.id);
  if (projectNavigation) {
    const backTarget = galleryBackTarget;
    const gallery = createProjectGallery(pagesData.pages, projectNavigation.categoryId, (projectPage, navigation) =>
      buildSinglePageGroup({
        ...projectPage,
        projectNavigation: { ...navigation, backTarget },
      }, { galleryTile: true }),
    );
    for (const [pageId, tile] of gallery.userData.projectTiles) {
      transitionManager.setProjectTileActive(tile, pageId === page.id);
    }
    gallery.userData.backTarget = backTarget;
    recordProjectVisit(gallery, page.id);
    return gallery;
  }

  return buildSinglePageGroup(page);
}

function buildSinglePageGroup(page, { galleryTile = false } = {}) {
  const pageForLayout = isProjectListPage(page)
    ? createProjectsLayoutPage(page)
    : page;
  const layout = generateLayout(pageForLayout, { isMobile: getCurrentCameraDevice() === 'mobile', fillerRings });
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
  const layout = generateLayout(createProjectsLayoutPage(page), { isMobile: getCurrentCameraDevice() === 'mobile', fillerRings });
  return layout
    .filter((blockData) => blockData.carouselDynamic)
    .map((blockData) => createBlock(blockData, textureLoader));
}

function createProjectCarouselBlocks(page) {
  const items = getNewestProjectItems(page, pagesData.pages);
  if (!items.length) return [{
    id: `${page.id}-empty`, type: 'content', subtype: 'text', carouselDynamic: true,
    placement: 'center', size: 'wide',
    content: { text: 'No projects yet.\nThis tag is ready for future work.', fontSize: 0.36, textAlign: 'left', fontWeight: 400 },
  }];
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
  if (options.historyState) {
    restoreNavigationPages(options.historyState, pageId, (page) => stateManager.upsertPage(page));
    galleryBackTarget = getSavedGalleryBackTarget(options.historyState);
  }
  if (stateManager.getPage(pageId)?.template === 'overlay') {
    openPageOverlay(pageId, options);
    return;
  }
  if (!options.preserveOverlay) closePageOverlay();
  const navigation = getProjectNavigation(pagesData.pages, pageId);
  const staysInGallery = navigation && currentGroup.userData.categoryId === navigation.categoryId;
  const lastPageId = stateManager.currentPageId;
  if (navigation && !options.historyState && !staysInGallery && !options.preservePrevious) {
    galleryBackTarget = lastPageId.startsWith('tag:') ? lastPageId : fallbackPageId;
  }
  if (staysInGallery && currentGroup.userData.backTarget !== galleryBackTarget) {
    currentGroup.userData.backTarget = galleryBackTarget;
    updateGroupBackTarget(currentGroup, galleryBackTarget);
  }
  if (pageId === lastPageId) {
    const page = stateManager.getCurrentPage();
    if (page.backTarget) updateGroupBackTarget(currentGroup, page.backTarget);
    if (!options.preserveOverlay) syncUrlToPage(pageId, {
      replace: options.replaceUrl ?? false, historyState: getNavigationHistoryState(page),
    });
    return;
  }

  const nextPage = stateManager.goToPage(pageId);
  pointerGesture = null;
  clearHover();
  if (!options.preservePrevious && !staysInGallery) {
    previousPageId = lastPageId;
  }
  if (!options.preserveOverlay) syncUrlToPage(pageId, {
    replace: options.replaceUrl ?? false,
    historyState: getNavigationHistoryState(nextPage),
  });

  controls.enabled = false;
  isPageTransitioning = true;

  try {
    const previousTarget = getCameraLayout(lastPageId).target;
    const nextTarget = getCameraLayout().target;
    const distance = Math.hypot(nextTarget.x - previousTarget.x, nextTarget.z - previousTarget.z);
    // Home and each category's first tile share the same grid location.
    // Replace those tiles directly; reserve the grid sequence for actual travel.
    const gridTravel = distance > 0.02 ? {
      restoreGrid: () => infiniteGrid.animateExclusions([], { duration: 360 * blockTransitionTimeScale }),
      moveCamera: () => animateCameraToDefault(Math.min(1800, 650 + distance * 18) * transitionTimeScale * cameraTravelTimeScale),
      clearGrid: (group) => infiniteGrid.animateExclusions(getBlockFootprints([group]), { duration: 360 * blockTransitionTimeScale }),
    } : {
      // A manual pan/rotation/zoom can need correction even at the same tile.
      // At the default framing this resolves immediately, without a delay.
      moveCamera: () => animateCameraToDefault(450 * pageSwapTimeScale * blockSwapDurationScale),
      clearGrid: (group) => infiniteGrid.setExclusions(getBlockFootprints([group])),
    };
    if (staysInGallery) {
      await transitionManager.transitionProjectTile({
        newTile: currentGroup.userData.projectTiles.get(pageId),
        moveCamera: () => animateCameraToProject(pageId),
        clearGrid: () => infiniteGrid.animateExclusions(getBlockFootprints([currentGroup]), { duration: 360 * blockTransitionTimeScale }),
      });
      recordProjectVisit(currentGroup, pageId);
    } else if (currentGroup.userData.categoryId) {
      const exploringTags = nextPage.template === 'tagDirectory';
      const firstProjectId = currentGroup.userData.projectTiles.keys().next().value;
      const firstTile = currentGroup.userData.projectTiles.get(firstProjectId);
      const returnPlan = getGalleryReturnPlan(currentGroup, lastPageId, getProjectTilePosition(navigation?.index ?? 0));
      if (exploringTags) {
        // The first project is a visual waypoint, not an extra history entry.
        returnPlan.finalTile = firstTile;
        returnPlan.departures = returnPlan.departures.filter((entry) => entry.tile !== firstTile);
      }
      currentGroup = await transitionManager.returnThroughGallery({
        gallery: currentGroup,
        returnPlan,
        newGroupFactory: () => buildPageGroup(nextPage),
        scene,
        moveToDestination: (onProgress) => animateGalleryReturn(exploringTags ? firstProjectId : pageId, onProgress),
        prepareFinalTile: exploringTags ? async (tile) => {
          if (tile.visible) return;
          transitionManager.setProjectTileActive(tile, true, 0);
          await infiniteGrid.animateExclusions(getBlockFootprints([currentGroup]), { duration: 360 * blockTransitionTimeScale });
          await transitionManager.animateObjects([tile], 'enter', {
            duration: 260 * blockTransitionTimeScale, stagger: 4 * blockTransitionTimeScale,
          });
        } : undefined,
        restoreGrid: (group) => infiniteGrid.animateExclusions(getBlockFootprints([group]), { duration: 360 * blockTransitionTimeScale }),
        clearGrid: (group) => infiniteGrid.animateExclusions(getBlockFootprints([group]), { duration: 360 * blockTransitionTimeScale }),
        updateGrid: (group) => infiniteGrid.setExclusions(getBlockFootprints([group])),
      });
    } else {
      currentGroup = await transitionManager.transitionToPage({
        oldGroup: currentGroup,
        newGroupFactory: () => buildPageGroup(nextPage),
        scene,
        ...gridTravel,
      });
    }
  } finally {
    isPageTransitioning = false;
    if (cameraViewMode === 'top') {
      readingLayout = {
        ...getReadingCameraLayout(),
        position: camera.position.clone(),
        target: controls.target.clone(),
        viewSize: currentCameraViewSize,
        zoom: camera.zoom,
      };
    }
    controls.enabled = !activeOverlayPageId && cameraControlsConfig.enabled && cameraViewMode === 'default';
    syncControlsToCamera();
    if (queuedNavigation) {
      const queued = queuedNavigation;
      queuedNavigation = null;
      void goToPage(queued.pageId, queued.options);
    }
  }
}

function openPageOverlay(pageId, { replaceUrl = false, origin } = {}) {
  const page = stateManager.getPage(pageId);
  if (!page?.overlay) return;
  if (activeOverlayPageId === pageId && modalManager.projectDetails.root.dataset.state === 'open') return;
  clearHover();
  pointerGesture = null;
  syncControlsToCamera();
  controls.enabled = false;
  activeOverlayPageId = pageId;
  const savedBackground = replaceUrl && window.history.state?.pageId === pageId
    ? stateManager.getPage(window.history.state?.backgroundPageId) : null;
  const backgroundPageId = savedBackground && savedBackground.template !== 'overlay'
    ? savedBackground.id : stateManager.currentPageId;
  const overlayPushed = !replaceUrl || (window.history.state?.pageId === pageId && window.history.state?.overlayPushed === true);
  syncUrlToPage(pageId, { replace: replaceUrl, historyState: {
    ...getNavigationHistoryState(stateManager.getPage(backgroundPageId)), backgroundPageId, overlayPushed,
  } });
  modalManager.openPage(page.overlay, {
    origin,
    onDismiss: () => {
      // User dismissal owns one history step; route-driven closes never do.
      activeOverlayPageId = null;
      controls.enabled = !isPageTransitioning && cameraControlsConfig.enabled && cameraViewMode === 'default';
      if (getPageIdFromUrl() !== pageId) return;
      if (overlayPushed) window.history.back();
      else syncUrlToPage(backgroundPageId, { replace: true, historyState: getNavigationHistoryState(stateManager.getPage(backgroundPageId)) });
    },
  });
  if (backgroundPageId !== stateManager.currentPageId) {
    // Restore this history entry's background beneath the covering 2D panels.
    void goToPage(backgroundPageId, { replaceUrl: true, preservePrevious: true, preserveOverlay: true });
  }
}

function closePageOverlay() {
  if (!activeOverlayPageId) return;
  activeOverlayPageId = null;
  modalManager.closePage();
  controls.enabled = cameraControlsConfig.enabled && cameraViewMode === 'default';
}

function handlePopState() {
  const pageId = getPageIdFromUrl();
  const tag = getTagFromUrl();
  // Capture this entry before a running transition queues the navigation.
  const options = { replaceUrl: true, historyState: { ...(window.history.state ?? {}) } };
  if (tag) {
    goToPage(getTagPageId(tag), { ...options, preservePrevious: true });
    return;
  }
  goToPage(pageId && stateManager.getPage(pageId) ? pageId : fallbackPageId, options);
}

function handlePointerMove(event) {
  const gesture = pointerGesture?.pointerId === event.pointerId ? pointerGesture : null;
  if (gesture) {
    const drag = gesture.drag.move(event.clientX, event.clientY);
    if (gesture.viewMode === 'top') {
      event.stopImmediatePropagation();
      event.preventDefault();
      clearHover();
      if (gesture.returning) {
        continueReadingReturnDrag(gesture, event);
      } else if (drag.released) {
        beginReadingReturnDrag(gesture, event);
      } else {
        applyReadingDrag(drag);
      }
      return;
    }
    if (!drag.isClick) {
      clearHover();
      return;
    }
  }
  if (transitionManager.isTransitioning || isPageTransitioning || isCameraResetting) return;
  const hit = getInteractiveHit(event);
  if (hit?.object === hoveredMesh) return;
  clearHover();
  if (hit) {
    hoveredMesh = hit.object;
    // Reading surfaces stay still; only buttons have the hover lift.
    if (hasBlockAction(hoveredMesh.userData.blockData)
      && hoveredMesh.userData.blockData.subtype !== 'pageIndicator') {
      hoveredMesh.position.y += 0.06;
    }
    document.body.style.cursor = 'pointer';
  }
}

function handlePointerDown(event) {
  if (transitionManager.isTransitioning || isPageTransitioning || isCameraResetting) {
    event.stopImmediatePropagation();
    return;
  }
  if (event.button !== 0 || pointerGesture) return;
  const topView = cameraViewMode === 'top';
  pointerGesture = {
    pointerId: event.pointerId,
    viewMode: cameraViewMode,
    drag: new ReadingDrag(event.clientX, event.clientY, getCurrentCameraDevice() === 'mobile' ? 64 : 84),
    hit: getInteractiveHit(event),
    returning: false,
  };
  if (topView) {
    event.stopImmediatePropagation();
    event.preventDefault();
    canvas.setPointerCapture(event.pointerId);
  }
}

function handlePointerUp(event) {
  const gesture = pointerGesture;
  if (!gesture || gesture.pointerId !== event.pointerId) return;
  pointerGesture = null;
  const drag = gesture.drag.move(event.clientX, event.clientY);
  if (gesture.viewMode === 'top') {
    event.stopImmediatePropagation();
    event.preventDefault();
    if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    if (gesture.returning) {
      continueReadingReturnDrag(gesture, event);
      finishReadingReturnDrag();
      return;
    }
    if (drag.released) {
      void leaveReadingView();
      return;
    }
    if (!drag.isClick) {
      void animateCameraToLayout(readingLayout, 180);
      return;
    }
  }
  // A drag that starts on a button must never activate that button on release.
  if (!drag.isClick || isCameraResetting || isPageTransitioning) return;
  const hit = getInteractiveHit(event);
  if (hit?.object !== gesture.hit?.object) return;
  activateBlock(hit?.object.userData.blockData, { x: event.clientX, y: event.clientY });
}

function handlePointerCancel(event) {
  if (pointerGesture?.pointerId !== event.pointerId) return;
  const gesture = pointerGesture;
  pointerGesture = null;
  if (gesture.returning) {
    finishReadingReturnDrag();
    return;
  }
  if (gesture.viewMode === 'top' && !gesture.returning && readingLayout && !isCameraResetting) {
    void animateCameraToLayout(readingLayout, 180);
  }
}

function activateBlock(blockData, origin) {
  if (!blockData) return;
  if (blockData.projectPageId && blockData.projectPageId !== stateManager.currentPageId) {
    goToPage(blockData.projectPageId, { preservePrevious: true });
    return;
  }
  if (!hasBlockAction(blockData)) {
    void enterReadingView();
    return;
  }
  if (blockData.action?.type === 'state') {
    if (blockData.action.target === 'tags') {
      goToTagsDirectory();
      return;
    }
    goToPage(blockData.action.target, { origin });
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
  if (blockData.type === 'moreInfo') {
    clearHover();
    modalManager.openModal(blockData.modal, {
      projectId: stateManager.currentPageId,
      projectDetails: stateManager.getCurrentPage().projectDetails,
      origin,
      onTag: goToTagPage,
    });
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
  const pageCount = Math.max(1, Math.ceil(getNewestProjectItems(page, pagesData.pages).length / projectsPerPage));

  if (pageCount <= 1) {
    return;
  }

  projectsCarouselPage = (projectsCarouselPage + direction + pageCount) % pageCount;
  clearHover();

  await transitionManager.replaceChildren({
    parent: currentGroup,
    oldChildren: currentGroup.children.filter((child) => child.userData.blockData?.carouselDynamic),
    newChildren: buildProjectDynamicGroups(page),
    onTransitionStart: () => infiniteGrid.setExclusions(getBlockFootprints([currentGroup])),
  });
  infiniteGrid.setExclusions(getBlockFootprints([currentGroup]));
}

function goToTagsDirectory() {
  stateManager.upsertPage(createTagsPage(pagesData, { backTarget: stateManager.currentPageId }));
  goToPage('tags');
}

function getValidBackTarget(target, fallback = fallbackPageId) {
  if (typeof target === 'string' && target.startsWith('tag:') && normalizeTag(target.slice(4))) {
    return getTagPageId(target.slice(4));
  }
  return pagesData.pages.some((page) => page.id === target && page.template !== 'overlay') ? target : fallback;
}

function getSavedGalleryBackTarget(historyState = {}) {
  const target = getValidBackTarget(historyState.galleryBackTarget);
  return target.startsWith('tag:') ? target : fallbackPageId;
}

function restoreNavigationPages(historyState, pageId, upsert) {
  // The directory's origin differs from a result page's own Back target (Tags).
  const tagsTarget = getValidBackTarget(historyState.tagsBackTarget
    ?? (historyState.pageId === 'tags' ? historyState.backTarget : undefined));
  upsert(createTagsPage(pagesData, { backTarget: tagsTarget === 'tags' ? fallbackPageId : tagsTarget }));
  const savedGalleryTarget = getSavedGalleryBackTarget(historyState);
  if (savedGalleryTarget.startsWith('tag:')) {
    upsert(createTagProjectPage(savedGalleryTarget.slice(4), getValidBackTarget(historyState.galleryTagBackTarget, 'tags')));
  }
  const resultPageId = pageId?.startsWith('tag:') ? pageId : historyState.backgroundPageId;
  if (resultPageId?.startsWith('tag:')) {
    upsert(createTagProjectPage(resultPageId.slice(4), getValidBackTarget(historyState.backTarget, 'tags')));
  }
}

function getNavigationHistoryState(page = stateManager.getCurrentPage()) {
  return {
    tagsBackTarget: stateManager.getPage('tags')?.backTarget ?? fallbackPageId,
    galleryBackTarget,
    ...(galleryBackTarget.startsWith('tag:') ? {
      galleryTagBackTarget: stateManager.getPage(galleryBackTarget)?.backTarget ?? 'tags',
    } : {}),
    ...(page?.backTarget ? { backTarget: page.backTarget } : {}),
  };
}

function updateGroupBackTarget(group, target) {
  group.traverse((object) => {
    const action = object.userData.blockData?.action;
    if (action?.type === 'back') action.target = target;
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
    backTarget,
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
      ...(matchingItems.length > projectsPerPage ? createProjectListNavBlocks(getTagPageId(tag)) : []),
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

  return blockHit;
}

function clearHover() {
  if (hoveredMesh) {
    hoveredMesh.position.y = hoveredMesh.userData.originalY;
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

function getCameraLayout(pageId = stateManager.currentPageId) {
  const device = getCurrentCameraDevice();
  const presentation = stateManager.getPage(pageId)?.projectDetails?.presentation;
  const layout = {
    ...defaultCameraConfig[device],
    ...(device === 'mobile' ? presentation?.mobileCamera : {}),
  };
  const frame = getViewportCameraFrame(window.innerWidth, window.innerHeight, layout);
  const target = layout.target.clone().add(frame.targetOffset);
  const projectNavigation = getProjectNavigation(pagesData.pages, pageId);
  if (projectNavigation) {
    target.add(getProjectTilePosition(projectNavigation.index));
  }
  const cameraOffset = getSceneCameraOffset(layout);

  return {
    ...layout,
    viewSize: frame.viewSize,
    target,
    position: target.clone().add(cameraOffset),
  };
}

function getCurrentCameraDevice() {
  return getCameraDevice(window.innerWidth, window.matchMedia('(pointer: coarse)').matches);
}

function getInitialPageId() {
  const tag = getTagFromUrl();
  if (tag) {
    return getTagPageId(tag);
  }

  const pageId = getPageIdFromUrl();
  if (pagesData.pages.find((page) => page.id === pageId)?.template === 'overlay') {
    const background = pagesData.pages.find((page) => page.id === window.history.state?.backgroundPageId && page.template !== 'overlay');
    return background ? resolveCategoryPageId(pagesData.pages, background.id) : fallbackPageId;
  }
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

function syncUrlToPage(pageId, { replace = false, historyState = {} } = {}) {
  const targetHash = pageId === fallbackPageId ? '#/' : `#/${encodeURIComponent(pageId)}`;
  const targetUrl = `${window.location.pathname}${window.location.search}${targetHash}`;

  if (`${window.location.pathname}${window.location.search}${window.location.hash}` === targetUrl) {
    if (Object.keys(historyState).length) {
      window.history.replaceState({ pageId, ...historyState }, '', targetUrl);
    }
    return;
  }

  if (replace) {
    window.history.replaceState({ pageId, ...historyState }, '', targetUrl);
  } else {
    window.history.pushState({ pageId, ...historyState }, '', targetUrl);
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
    .filter((page) => ['projects', 'experiments', 'teaching'].includes(page.id))
    .flatMap((page) => page.projectItems ?? []);
  const uniqueItems = [...new Map(allItems.map((item) => [item.target, item])).values()];

  return uniqueItems.map((item) => {
    const detailPage = pagesData.pages.find((page) => page.id === item.target);
    return {
      ...item,
      tags: detailPage?.projectDetails ? getProjectTags(detailPage.projectDetails) : item.tags ?? [],
    };
  });
}

function getTagPageId(tag) {
  return `tag:${normalizeTag(tag)}`;
}

function animateCameraToDefault(duration) {
  // All pages share this fit: only a user-adjusted camera needs scale correction.
  return animateCameraToLayout(getNavigationCameraLayout(), duration);
}

function animateCameraToProject(pageId) {
  const layout = getNavigationCameraLayout(pageId);
  const distance = controls.target.distanceTo(layout.target);
  return animateCameraToLayout(
    layout,
    Math.min(1800, 650 + distance * 18) * transitionTimeScale * cameraTravelTimeScale,
  );
}

function animateGalleryReturn(pageId, onProgress) {
  const layout = getNavigationCameraLayout(pageId);
  const distance = controls.target.distanceTo(layout.target);
  return animateCameraToLayout(
    layout,
    Math.min(2800, 550 + distance * 35) * transitionTimeScale,
    onProgress,
  );
}

function getNavigationCameraLayout(pageId = stateManager.currentPageId) {
  return cameraViewMode === 'top' ? getReadingCameraLayout(pageId) : getCameraLayout(pageId);
}

function getReadingCameraLayout(pageId = stateManager.currentPageId) {
  const page = stateManager.getPage(pageId);
  const navigation = getProjectNavigation(pagesData.pages, pageId);
  const tile = currentGroup.userData.projectTiles?.get(pageId)
    ?? (currentGroup.name === `page-${pageId}` ? currentGroup : null);
  // Destinations can still be below the grid, or not built yet. Frame their
  // authored blocks without depending on their current visibility or height.
  const blocks = tile
    ? tile.children.map((child) => child.userData.blockData).filter(Boolean)
    : generateLayout(navigation ? { ...page, projectNavigation: navigation } : page,
      { isMobile: getCurrentCameraDevice() === 'mobile', fillerRings });
  const origin = navigation ? getProjectTilePosition(navigation.index) : new THREE.Vector3();
  const bounds = {
    minX: Math.min(...blocks.map((block) => block.worldX - (block.worldW + (block.gapX ?? 0.08)) / 2)) + origin.x,
    maxX: Math.max(...blocks.map((block) => block.worldX + (block.worldW + (block.gapX ?? 0.08)) / 2)) + origin.x,
    minZ: Math.min(...blocks.map((block) => block.worldZ - (block.worldD + 0.08) / 2)) + origin.z,
    maxZ: Math.max(...blocks.map((block) => block.worldZ + (block.worldD + 0.08) / 2)) + origin.z,
    height: Math.max(...blocks.map((block) => block.height)) + 0.08,
  };
  return getTopDownCameraLayout(window.innerWidth, window.innerHeight, bounds, getCurrentCameraDevice() === 'mobile');
}

async function enterReadingView() {
  if (cameraViewMode === 'top') return;
  clearHover();
  syncControlsToCamera();
  cameraViewMode = 'top';
  controls.enabled = false;
  readingLayout = getReadingCameraLayout();
  await animateCameraToLayout(readingLayout, 480);
}

function applyReadingDrag(drag) {
  if (!readingLayout) return;
  // Only a few pixels of movement get through before the release threshold.
  const unitsPerPixel = readingLayout.viewSize / readingLayout.zoom / window.innerHeight;
  const outward = readingLayout.position.clone().sub(readingLayout.target).normalize();
  const right = new THREE.Vector3(outward.z, 0, -outward.x).normalize();
  const up = new THREE.Vector3().crossVectors(outward, right);
  const offset = right.multiplyScalar(-drag.x * unitsPerPixel).addScaledVector(up, -drag.y * unitsPerPixel);
  controls.target.copy(readingLayout.target).add(offset);
  camera.position.copy(readingLayout.position).add(offset);
  camera.lookAt(controls.target);
}

function beginReadingReturnDrag(gesture, event) {
  gesture.returning = true;
  gesture.orbitLayout = getCameraLayout();
  const spherical = new THREE.Spherical().setFromVector3(
    gesture.orbitLayout.position.clone().sub(gesture.orbitLayout.target),
  );
  gesture.orbitRadius = spherical.radius;
  gesture.orbit = new ContinuedOrbitDrag(event.clientX, event.clientY, window.innerHeight,
    spherical.phi, spherical.theta, cameraControlsConfig);
  void leaveReadingView(gesture);
}

function getContinuedDragLayout(gesture) {
  return {
    ...gesture.orbitLayout,
    position: new THREE.Vector3().setFromSphericalCoords(
      gesture.orbitRadius, gesture.orbit.polarAngle, gesture.orbit.azimuthAngle,
    ).add(gesture.orbitLayout.target),
  };
}

function continueReadingReturnDrag(gesture, event) {
  gesture.orbit.move(event.clientX, event.clientY);
  if (!isCameraResetting) {
    const layout = getContinuedDragLayout(gesture);
    camera.position.copy(layout.position);
    controls.target.copy(layout.target);
    camera.lookAt(layout.target);
  }
}

function finishReadingReturnDrag() {
  if (!isCameraResetting) {
    syncControlsToCamera();
    controls.enabled = cameraControlsConfig.enabled && !isPageTransitioning;
  }
}

async function leaveReadingView(gesture) {
  clearHover();
  cameraViewMode = 'default';
  readingLayout = null;
  controls.enabled = false;
  // The destination keeps following the held drag during the tween. After
  // arrival, that same pointer continues rotating until it is released.
  await animateCameraToLayout(getCameraLayout(), 420, undefined,
    gesture ? () => getContinuedDragLayout(gesture) : undefined);
  controls.enabled = cameraControlsConfig.enabled && !isPageTransitioning
    && (!gesture || pointerGesture !== gesture);
}

function animateCameraToLayout(layout, duration, onProgress, getLiveLayout) {
  const startViewSize = currentCameraViewSize;
  const endViewSize = layout.viewSize ?? startViewSize;
  const changesViewSize = endViewSize !== startViewSize;
  const startZoom = camera.zoom;
  const endZoom = layout.zoom ?? startZoom;
  const changesZoom = endZoom !== startZoom;

  cameraStartPosition.copy(camera.position);
  cameraEndPosition.copy(layout.position);
  cameraStartTarget.copy(controls.target);
  cameraEndTarget.copy(layout.target);
  cameraStartQuaternion.copy(camera.quaternion);
  cameraTargetObject.position.copy(layout.position);
  cameraTargetObject.lookAt(layout.target);
  cameraEndQuaternion.copy(cameraTargetObject.quaternion);

  if (!hasCameraMovedToLayout(startViewSize, endViewSize) && Math.abs(startZoom - endZoom) < 0.001) {
    onProgress?.(1);
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
      if (changesViewSize) applyCameraViewSize(endViewSize);
      camera.zoom = endZoom;
      camera.updateProjectionMatrix();
      syncControlsToCamera();
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

      if (getLiveLayout) cameraEndPosition.copy(getLiveLayout().position);
      camera.position.lerpVectors(cameraStartPosition, cameraEndPosition, eased);
      cameraResetTarget.lerpVectors(cameraStartTarget, cameraEndTarget, eased);
      controls.target.copy(cameraResetTarget);
      camera.lookAt(cameraResetTarget);
      onProgress?.(eased);
      if (changesViewSize) {
        applyCameraViewSize(THREE.MathUtils.lerp(startViewSize, endViewSize, eased));
      }
      if (changesZoom) {
        camera.zoom = THREE.MathUtils.lerp(startZoom, endZoom, eased);
        camera.updateProjectionMatrix();
      }

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

function isTopFaceHit(hit) {
  if (!hit.object.userData?.isBlockMesh || !hit.face) {
    return false;
  }

  hitFaceNormal.copy(hit.face.normal).transformDirection(hit.object.matrixWorld);
  return hitFaceNormal.y > 0.9;
}

function syncControlsToCamera() {
  // Drain leftover gesture damping without letting it shift the restored view.
  const position = camera.position.clone();
  const target = controls.target.clone();
  const zoom = camera.zoom;
  const wasDampingEnabled = controls.enableDamping;
  controls.enableDamping = false;
  controls.update();
  camera.position.copy(position);
  controls.target.copy(target);
  camera.zoom = zoom;
  camera.lookAt(target);
  camera.updateProjectionMatrix();
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
