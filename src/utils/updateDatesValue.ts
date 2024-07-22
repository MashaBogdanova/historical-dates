export default function updateDatesValue(
  currentValue: number,
  targetValue: number,
  // eslint-disable-next-line no-unused-vars
  setValue: (value: number) => void,
) {
  if (currentValue !== targetValue) {
    const increment = currentValue < targetValue ? 1 : -1;
    setTimeout(() => setValue(currentValue + increment), 15);
  }
}
