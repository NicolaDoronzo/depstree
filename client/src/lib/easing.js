import { MathUtils } from "three";

/**
 *
 * @param {number} x
 * @returns number;
 */
function flip(x) {
  return 1 - x;
}

export function easeOut(x) {
  x = MathUtils.clamp(x, 0, 1);
  return flip(Math.pow((1 - x), 4));
}
