import * as THREE from 'three';

export class TransitionManager {
  constructor({
    duration = 420,
    stagger = 16,
    ringDuration = 300,
    ringDelaySpread = 90,
    overlapDelay = 180,
    floorY = 0,
    hideMargin = 0.18,
    timeScale = 1,
    pageTimeScale = 1,
  } = {}) {
    this.timeScale = timeScale;
    this.duration = duration * timeScale * pageTimeScale;
    this.stagger = stagger * timeScale * pageTimeScale;
    this.ringDuration = ringDuration * timeScale * pageTimeScale;
    this.ringDelaySpread = ringDelaySpread * timeScale * pageTimeScale;
    this.overlapDelay = overlapDelay * timeScale;
    this.floorY = floorY;
    this.hideMargin = hideMargin;
    this.isTransitioning = false;
  }

  async transitionToPage({ oldGroup, newGroupFactory, scene, restoreGrid, moveCamera, clearGrid }) {
    if (this.isTransitioning) {
      return oldGroup;
    }

    this.isTransitioning = true;

    const newGroup = newGroupFactory();
    scene.add(newGroup);
    this.setGroupProgress(newGroup, 0);
    try {
      if (oldGroup) await this.animateGroup(oldGroup, 'exit');
      if (oldGroup) {
        scene.remove(oldGroup);
        disposeGroup(oldGroup);
      }
      await restoreGrid?.();
      await moveCamera?.();
      await clearGrid?.(newGroup);
      await this.animateGroup(newGroup, 'enter');
      return newGroup;
    } finally {
      this.isTransitioning = false;
    }
  }

  async replaceChildren({ parent, oldChildren, newChildren, onTransitionStart }) {
    if (this.isTransitioning) {
      return false;
    }

    this.isTransitioning = true;

    newChildren.forEach((child) => {
      parent.add(child);
      this.setGroupProgress(child, 0);
    });
    onTransitionStart?.();

    if (oldChildren.length > 0) await this.animateObjects(oldChildren, 'exit');
    oldChildren.forEach((child) => {
      parent.remove(child);
      disposeGroup(child);
    });
    await this.animateObjects(newChildren, 'enter');

    this.isTransitioning = false;
    return true;
  }

  animateGroup(group, direction) {
    if (group.userData.transitionGroups) {
      return Promise.all(group.userData.transitionGroups.map((tile) => this.animateGroup(tile, direction)));
    }
    const { centralMeshes, ringMeshes } = splitBlockMeshes(group);

    const centralAnimation = this.animateMeshes(
      centralMeshes.sort(
        (a, b) => a.getWorldPosition(tempA).x - b.getWorldPosition(tempB).x,
      ),
      direction,
      {
        duration: this.duration,
        delays: centralMeshes.map((_, index) => index * this.stagger),
      },
    );

    const ringAnimation = this.animateMeshes(ringMeshes, direction, {
      duration: this.ringDuration,
      delays: ringMeshes.map(() => Math.random() * this.ringDelaySpread),
    });

    return Promise.all([centralAnimation, ringAnimation]);
  }

  setProjectTileActive(tile, active, progress = 1) {
    tile.visible = active;
    getBlockMeshes(tile).forEach((mesh) => { mesh.userData.skipPageTransition = !active; });
    this.setGroupProgress(tile, active ? progress : 0);
  }

  async transitionProjectTile({ newTile, moveCamera, clearGrid }) {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    try {
      // Leave the destination filled with grid throughout the camera journey.
      // Visited projects remain raised until the return to Home.
      await moveCamera();
      if (!newTile.visible) {
        this.setProjectTileActive(newTile, true, 0);
        await clearGrid?.();
        await this.animateObjects([newTile], 'enter', {
          duration: 260 * this.timeScale, stagger: 4 * this.timeScale,
        });
      }
    } finally {
      this.isTransitioning = false;
    }
  }

  async returnThroughGallery({ gallery, returnPlan, newGroupFactory, scene, moveToDestination, restoreGrid, clearGrid, updateGrid, prepareFinalTile }) {
    if (this.isTransitioning) return gallery;
    this.isTransitioning = true;
    try {
      // Explore by Tags can reveal an unvisited first project during the return.
      // Home keeps its existing behavior when no preparation hook is supplied.
      const finalPreparation = prepareFinalTile?.(returnPlan.finalTile);
      const departures = new Map();
      const lowerPassedTiles = (progress) => {
        for (const entry of returnPlan.departures) {
          if (progress < entry.progress || departures.has(entry.tile)) continue;
          const departure = this.animateObjects([entry.tile], 'exit', {
            duration: 220 * this.timeScale, stagger: 4 * this.timeScale,
          }).then(async () => {
            this.setProjectTileActive(entry.tile, false);
            await restoreGrid(gallery);
          });
          departures.set(entry.tile, departure);
        }
      };
      lowerPassedTiles(0);
      // One camera tween owns the entire return. Tile/grid animations overlap
      // that journey and never create individual camera stops.
      await moveToDestination(lowerPassedTiles);
      lowerPassedTiles(1);
      await Promise.all([...departures.values(), finalPreparation]);

      const { finalTile } = returnPlan;
      if (finalTile) {
        await this.animateGroup(finalTile, 'exit');
        this.setProjectTileActive(finalTile, false);
      }
      scene.remove(gallery);
      disposeGroup(gallery);
      const newGroup = newGroupFactory();
      this.setGroupProgress(newGroup, 0);
      scene.add(newGroup);
      // At the first project, swap directly to the destination. A direct link
      // may have left the origin as grid, so lower that grid before it emerges.
      if (finalTile) updateGrid(newGroup);
      else await clearGrid(newGroup);
      await this.animateGroup(newGroup, 'enter');
      return newGroup;
    } finally {
      this.isTransitioning = false;
    }
  }

  animateObjects(objects, direction, { duration = this.duration, stagger = this.stagger } = {}) {
    const meshes = objects
      .flatMap((object) => getBlockMeshes(object))
      .sort((a, b) => a.getWorldPosition(tempA).x - b.getWorldPosition(tempB).x);

    return this.animateMeshes(meshes, direction, {
      duration,
      delays: meshes.map((_, index) => index * stagger),
    });
  }

  getGroupAnimationDuration(group) {
    if (group.userData.transitionGroups) {
      return Math.max(0, ...group.userData.transitionGroups.map((tile) => this.getGroupAnimationDuration(tile)));
    }
    const { centralMeshes, ringMeshes } = splitBlockMeshes(group);
    return Math.max(
      this.getSteppedAnimationDuration(centralMeshes, this.duration, this.stagger),
      this.getSpreadAnimationDuration(ringMeshes, this.ringDuration, this.ringDelaySpread),
    );
  }

  getSteppedAnimationDuration(meshes, duration, delayStep) {
    if (meshes.length === 0) {
      return 0;
    }

    return duration + (meshes.length - 1) * delayStep;
  }

  getSpreadAnimationDuration(meshes, duration, delaySpread) {
    if (meshes.length === 0) {
      return 0;
    }

    return duration + delaySpread;
  }

  animateMeshes(meshes, direction, { duration, delays }) {
    if (meshes.length === 0) {
      return Promise.resolve();
    }

    const totalDuration = duration + Math.max(...delays);
    const start = performance.now();

    return new Promise((resolve) => {
      const tick = (now) => {
        const elapsed = now - start;

        meshes.forEach((mesh, index) => {
          const localElapsed = elapsed - delays[index];
          const t = clamp(localElapsed / duration, 0, 1);
          const eased = easeInOutCubic(t);
          const progress = direction === 'enter' ? eased : 1 - eased;
          this.setMeshProgress(mesh, progress);
        });

        if (elapsed >= totalDuration) {
          meshes.forEach((mesh) => this.setMeshProgress(mesh, direction === 'enter' ? 1 : 0));
          resolve();
          return;
        }

        requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    });
  }

  setGroupProgress(group, progress) {
    getBlockMeshes(group).forEach((mesh) =>
      this.setMeshProgress(mesh, mesh.userData.skipPageTransition ? 0 : progress),
    );
  }

  setMeshProgress(mesh, progress) {
    const originalHeight = mesh.userData.originalHeight ?? 1;
    const originalY = mesh.userData.originalY ?? originalHeight / 2;
    const hiddenScale = 0.001;
    const scaleY = Math.max(hiddenScale, progress);
    const hiddenY = this.floorY - this.hideMargin - (originalHeight * hiddenScale) / 2;

    mesh.scale.y = scaleY;
    mesh.position.y = lerp(hiddenY, originalY, progress);
  }
}

const tempA = new THREE.Vector3();
const tempB = new THREE.Vector3();

function getBlockMeshes(group) {
  const meshes = [];
  group.traverse((child) => {
    if (child.userData?.isBlockMesh) {
      meshes.push(child);
    }
  });
  return meshes;
}

function splitBlockMeshes(group) {
  const centralMeshes = [];
  const ringMeshes = [];

  getBlockMeshes(group).forEach((mesh) => {
    if (mesh.userData.skipPageTransition) return;
    if (mesh.userData.blockData?.subtype === 'outerDecorative') {
      ringMeshes.push(mesh);
    } else {
      centralMeshes.push(mesh);
    }
  });

  return { centralMeshes, ringMeshes };
}

function disposeGroup(group) {
  group.traverse((child) => {
    child.geometry?.dispose?.();

    const materials = Array.isArray(child.material) ? child.material : [child.material];
    materials.forEach((material) => {
      material?.dispose?.();
    });
  });
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function lerp(start, end, progress) {
  return start + (end - start) * progress;
}
