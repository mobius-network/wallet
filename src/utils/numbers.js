export function toFixed(number, places = 7) {
  const value = number.toFixed(places);

  const [x, y] = value.split('.');

  let last = y.length - 1;

  while (y[last] === '0') {
    last -= 1;
  }

  return `${x}.${y.substr(0, last + 1).padEnd(2, '0')}`;
}
