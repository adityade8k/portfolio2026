import * as THREE from 'three';
import { getNewestProjectItems, getProjectNavigation } from './projectNavigation.js';

// Arrange the tiles along the horizontal axis of the isometric view.
const tileSpacing = 11.2;
const rowAngle = Math.PI / 6;

export function getProjectTilePosition(index) {
  return new THREE.Vector3(
    index * tileSpacing * Math.cos(rowAngle),
    0,
    -index * tileSpacing * Math.sin(rowAngle),
  );
}

export function createProjectGallery(pages, categoryId, createTile) {
  const category = pages.find((page) => page.id === categoryId);
  const gallery = new THREE.Group();
  gallery.name = `gallery-${categoryId}`;
  gallery.userData.categoryId = categoryId;
  gallery.userData.transitionGroups = [];
  gallery.userData.projectTiles = new Map();
  gallery.userData.visitedPageIds = [];

  for (const [index, item] of getNewestProjectItems(category, pages).entries()) {
    const page = pages.find((candidate) => candidate.id === item.target);
    const tile = createTile(page, getProjectNavigation(pages, page.id));
    tile.userData.projectPageId = item.target;
    tile.position.copy(getProjectTilePosition(index));
    gallery.add(tile);
    gallery.userData.projectTiles.set(page.id, tile);
    gallery.userData.transitionGroups.push(tile);
  }

  gallery.updateMatrixWorld(true);
  return gallery;
}

export function recordProjectVisit(gallery, pageId) {
  if (!gallery.userData.projectTiles.has(pageId)) throw new Error(`Unknown gallery project: ${pageId}`);
  // Keep each visited tile once, ordered by its most recent visit. Reversing
  // this path starts at the current tile even after Previous or a page-bar jump.
  const visits = gallery.userData.visitedPageIds;
  const previousVisit = visits.indexOf(pageId);
  if (previousVisit !== -1) visits.splice(previousVisit, 1);
  visits.push(pageId);
}

export function getGalleryReturnTiles(gallery) {
  return [...gallery.userData.visitedPageIds].reverse()
    .map((pageId) => gallery.userData.projectTiles.get(pageId))
    .filter((tile) => tile.visible);
}

export function getGalleryReturnPlan(gallery, fromPageId, destination = new THREE.Vector3()) {
  const start = gallery.userData.projectTiles.get(fromPageId).position;
  const direction = destination.clone().sub(start);
  const distanceSquared = direction.lengthSq();
  const tiles = getGalleryReturnTiles(gallery);
  const finalTile = tiles.find((tile) => tile.position.distanceToSquared(destination) < 0.0004);
  const departures = tiles.filter((tile) => tile !== finalTile).map((tile) => ({
    tile,
    // Schedule by spatial position, rather than visit order. Previous, jumps,
    // and wraparound must not make the return camera double back or stop.
    progress: distanceSquared > 0.0004
      ? THREE.MathUtils.clamp(tile.position.clone().sub(start).dot(direction) / distanceSquared, 0, 1)
      : 0,
  }));
  return { finalTile, departures };
}
