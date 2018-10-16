export function toFixed(number) {
  const value = number.toFixed(7);

  const [x, y] = value.split('.');

  let last = y.length - 1;

  while (y[last] === '0') {
    last -= 1;
  }

  return `${x}.${y.substr(0, last + 1).padEnd(2, '0')}`;
}
