import * as THREE from 'three';
import { HEIGHT_RANGES, TILE_GRID } from './layoutEngine.js';

export const DEFAULT_CAMERA = Object.freeze({
  cameraY: 8.2,
  polarAngleDegrees: 40,
  azimuthAngleDegrees: 30,
  zoom: 1.2,
  framingZoom: 1.05,
});

export function getCameraDevice(width, coarsePointer = false) {
  // Keep landscape phones and touch tablets on the same camera as portrait.
  return width <= 1024 || coarsePointer ? 'mobile' : 'desktop';
}

export function getViewportCameraFrame(width, height, config = DEFAULT_CAMERA) {
  return getProjectedCameraFrame(width, height, framingBounds, config, 4);
}

export function getTopDownCameraLayout(width, height, bounds, mobile = width <= 1024) {
  const config = { ...DEFAULT_CAMERA, polarAngleDegrees: 0.5, azimuthAngleDegrees: 0, framingZoom: 1 };
  const frame = getProjectedCameraFrame(width, height, [bounds], config, mobile ? 12 : 24);
  const target = frame.targetOffset;
  return {
    ...config,
    viewSize: frame.viewSize,
    target,
    position: target.clone().add(getSceneCameraOffset(config)),
  };
}

function getProjectedCameraFrame(width, height, boundsList, config, inset) {
  const outward = getSceneCameraOffset(config).normalize();
  const right = new THREE.Vector3(outward.z, 0, -outward.x).normalize();
  const up = new THREE.Vector3().crossVectors(outward, right);
  const screenBounds = new THREE.Box2();
  const point = new THREE.Vector3();
  for (const bounds of boundsList) {
    for (const x of [bounds.minX, bounds.maxX]) for (const z of [bounds.minZ, bounds.maxZ]) for (const y of [0, bounds.height]) {
      point.set(x, y, z);
      screenBounds.expandByPoint(new THREE.Vector2(point.dot(right), point.dot(up)));
    }
  }
  const center = screenBounds.getCenter(new THREE.Vector2());
  const size = screenBounds.getSize(new THREE.Vector2());
  // Establish the edge fit, then apply the requested 5% closer framing.
  // On short screens, the base fit includes the controls too.
  const safeWidth = Math.max(1, width - inset * 2);
  const safeHeight = Math.max(1, height - inset * 2);
  return {
    viewSize: Math.max(size.x * height / safeWidth, size.y * height / safeHeight) * config.zoom / (config.framingZoom ?? 1),
    targetOffset: right.multiplyScalar(center.x).addScaledVector(up, center.y),
  };
}

export function getResizedViewSize(current, previousBase, nextBase) {
  // Preserve an intentional reading zoom, without retaining a previous screen's
  // aspect ratio when rotating or changing the viewport size.
  return current * nextBase / previousBase;
}

export function getSceneCameraOffset({ cameraY, polarAngleDegrees, azimuthAngleDegrees }) {
  const polarAngle = THREE.MathUtils.degToRad(polarAngleDegrees);
  const radius = cameraY / Math.max(0.001, Math.cos(polarAngle));
  // Orthographic distance preserves scale and keeps all four grid corners in
  // front of the near plane, including on tall phones and on Home.
  return new THREE.Vector3().setFromSphericalCoords(
    radius * 3, polarAngle, THREE.MathUtils.degToRad(azimuthAngleDegrees),
  );
}

// A shared envelope keeps the scale identical across Home and every project,
// regardless of randomized filler heights or which page bar is active.
const cellWidth = TILE_GRID.worldWidth / TILE_GRID.cols;
const cellDepth = TILE_GRID.worldDepth / TILE_GRID.rows;
function frameRect(x, z, width, depth, height) {
  return {
    minX: x * cellWidth - TILE_GRID.worldWidth / 2 + TILE_GRID.gap / 2,
    maxX: (x + width) * cellWidth - TILE_GRID.worldWidth / 2 - TILE_GRID.gap / 2,
    minZ: z * cellDepth - TILE_GRID.worldDepth / 2 + TILE_GRID.gap / 2,
    maxZ: (z + depth) * cellDepth - TILE_GRID.worldDepth / 2 - TILE_GRID.gap / 2,
    height,
  };
}
const framingBounds = [
  frameRect(0, 0, TILE_GRID.cols, TILE_GRID.rows, HEIGHT_RANGES.content.max + 0.08),
  frameRect(0, -1, 1, 1, HEIGHT_RANGES.content.max + 0.08),
  frameRect(1, TILE_GRID.rows, 5, 1, HEIGHT_RANGES.content.max + 0.24 + 0.08),
];
