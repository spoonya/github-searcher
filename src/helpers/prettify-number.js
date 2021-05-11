export default function prettifyNumber(value) {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }

  return value;
}
