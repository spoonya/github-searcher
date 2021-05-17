export default function prettifyNumber(
  value: number | string,
): string | number {
  if (value >= 1000) {
    return `${(+value / 1000).toFixed(1)}k`;
  }

  return value;
}
