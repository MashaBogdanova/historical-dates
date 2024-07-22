// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
export default function calculateRemainder(angle) {
  return ((angle % 360) + 360) % 360;
}
