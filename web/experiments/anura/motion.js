export const COUNT = 240;
export const wrap = n => ((Math.round(n) % COUNT) + COUNT) % COUNT;
export const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
// The supplied clip is a look-around, not a 360-degree turn. Anchors were reviewed in the source.
export function frameForPoint(x, y) {
  x = clamp(x, 0, 1); y = clamp(y, 0, 1);
  const dx = (x - .5) * 2, dy = (y - .5) * 2;
  if (Math.abs(dx) < .13 && Math.abs(dy) < .22) return 0;
  if (dy < -.35 && Math.abs(dy) > Math.abs(dx)) return Math.round(84 + dx * 45);
  if (dy > .5 && Math.abs(dy) > Math.abs(dx)) return Math.round(181 - dx * 25);
  return wrap(dx < 0 ? -dx * 30 : COUNT - dx * 102);
}
export function approach(current, target, dt) {
  const delta = ((target - current + 360) % COUNT) - 120;
  if(dt <= 0) return current;
  if(Math.abs(delta) <= 1) return target;
  // Fast, time-based response. The old fixed speed added up to 700 ms of input lag.
  const blend = 1 - Math.exp(-clamp(dt, 0, 50) / 38);
  return (current + delta * blend + COUNT) % COUNT;
}
export function coverRect(width, height, mobile = false) {
  const scale = Math.max(width / 1280, height / 720);
  return { x: (width - 1280 * scale) * (mobile ? .73 : .5), y: (height - 720 * scale) * .5,
    width: 1280 * scale, height: 720 * scale };
}
