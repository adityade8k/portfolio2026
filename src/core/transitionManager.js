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
  } = {}) {
    this.duration = duration;
    this.stagger = stagger;
    this.ringDuration = ringDuration;
    this.ringDelaySpread = ringDelaySpread;
    this.overlapDelay = overlapDelay;
    this.floorY = floorY;
    this.hideMargin = hideMargin;
    this.isTransitioning = false;
  }

  async transitionToPage({ oldGroup, newGroupFactory, scene, onTransitionStart }) {
    if (this.isTransitioning) {
      return oldGroup;
    }

    this.isTransitioning = true;

    const newGroup = newGroupFactory();
    scene.add(newGroup);
    this.setGroupProgress(newGroup, 0);
    const transitionDuration = Math.max(
      oldGroup ? this.getGroupAnimationDuration(oldGroup) : 0,
      this.overlapDelay + this.getGroupAnimationDuration(newGroup),
    );
    const linkedAnimation = onTransitionStart?.({ duration: transitionDuration }) ?? Promise.resolve();

    const exitPromise = oldGroup ? this.animateGroup(oldGroup, 'exit') : Promise.resolve();
    const enterPromise = wait(this.overlapDelay).then(() => this.animateGroup(newGroup, 'enter'));

    await exitPromise;
    if (oldGroup) {
      scene.remove(oldGroup);
      disposeGroup(oldGroup);
    }
    await enterPromise;
    await linkedAnimation;

    this.isTransitioning = false;
    return newGroup;
  }

  async replaceChildren({ parent, oldChildren, newChildren }) {
    if (this.isTransitioning) {
      return false;
    }

    this.isTransitioning = true;

    newChildren.forEach((child) => {
      parent.add(child);
      this.setGroupProgress(child, 0);
    });

    const exitPromise = oldChildren.length > 0 ? this.animateObjects(oldChildren, 'exit') : Promise.resolve();
    const enterPromise = wait(this.overlapDelay).then(() => this.animateObjects(newChildren, 'enter'));

    await exitPromise;
    oldChildren.forEach((child) => {
      parent.remove(child);
      disposeGroup(child);
    });
    await enterPromise;

    this.isTransitioning = false;
    return true;
  }

  animateGroup(group, direction) {
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

  animateObjects(objects, direction) {
    const meshes = objects
      .flatMap((object) => getBlockMeshes(object))
      .sort((a, b) => a.getWorldPosition(tempA).x - b.getWorldPosition(tempB).x);

    return this.animateMeshes(meshes, direction, {
      duration: this.duration,
      delays: meshes.map((_, index) => index * this.stagger),
    });
  }

  getGroupAnimationDuration(group) {
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
    getBlockMeshes(group).forEach((mesh) => this.setMeshProgress(mesh, progress));
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

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}
