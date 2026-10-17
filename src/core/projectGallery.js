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

  for (const [index, item] of getNewestProjectItems(category).entries()) {
    const page = pages.find((candidate) => candidate.id === item.target);
    const tile = createTile(page, getProjectNavigation(pages, page.id));
    tile.position.copy(getProjectTilePosition(index));
    gallery.add(tile);
    gallery.userData.projectTiles.set(page.id, tile);
    gallery.userData.transitionGroups.push(tile);
  }

  gallery.updateMatrixWorld(true);
  return gallery;
}

export function getProjectNavigationBlocks(tile) {
  return tile.children.filter(({ userData: { blockData } }) =>
    blockData?.action?.type === 'project'
    || blockData?.action?.type === 'back'
    || blockData?.subtype === 'counter',
  );
}
