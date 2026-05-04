import * as THREE from 'three';

export const DEFAULT_PALETTE = ['#f7f3e8', '#e23d28', '#1f5fbf', '#f4c430', '#111111'];

export function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

export function randomInt(min, max) {
  return Math.floor(randomBetween(min, max + 1));
}

export function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function pickFillerColor(palette = DEFAULT_PALETTE) {
  const cream = palette[0] ?? DEFAULT_PALETTE[0];
  const accent = palette.slice(1);
  const weighted = [cream, cream, cream, cream, cream, ...accent];
  return pick(weighted);
}

export function isDarkColor(color) {
  const value = new THREE.Color(color);
  const luminance = value.r * 0.2126 + value.g * 0.7152 + value.b * 0.0722;
  return luminance < 0.45;
}

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
