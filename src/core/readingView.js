// Buttons retain their actions; every other block can open the reading view.
export function hasBlockAction(block) {
  return block.type === 'moreInfo' || Boolean(block.action?.type);
}

export class ReadingDrag {
  constructor(x, y, threshold = 64) {
    this.x = x;
    this.y = y;
    this.threshold = threshold;
    this.maxDistance = 0;
    this.released = false;
  }

  move(x, y) {
    const dx = x - this.x;
    const dy = y - this.y;
    const distance = Math.hypot(dx, dy);
    this.maxDistance = Math.max(this.maxDistance, distance);
    this.released ||= distance >= this.threshold;
    const resistance = 0.14 / (1 + distance / this.threshold);
    return {
      x: dx * resistance,
      y: dy * resistance,
      released: this.released,
      isClick: this.maxDistance < 6,
    };
  }
}

// Keep the same drag origin as the camera returns, then continue from its
// latest angles. Clamping each step lets a reverse drag respond immediately.
export class ContinuedOrbitDrag {
  constructor(x, y, viewportHeight, polarAngle, azimuthAngle, limits) {
    this.x = x;
    this.y = y;
    this.viewportHeight = viewportHeight;
    this.polarAngle = polarAngle;
    this.azimuthAngle = azimuthAngle;
    this.limits = limits;
  }

  move(x, y) {
    const radiansPerPixel = 2 * Math.PI / Math.max(1, this.viewportHeight);
    this.polarAngle = clamp(this.polarAngle - (y - this.y) * radiansPerPixel,
      this.limits.minPolarAngle, this.limits.maxPolarAngle);
    this.azimuthAngle = clamp(this.azimuthAngle - (x - this.x) * radiansPerPixel,
      this.limits.minAzimuthAngle, this.limits.maxAzimuthAngle);
    this.x = x;
    this.y = y;
  }
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
