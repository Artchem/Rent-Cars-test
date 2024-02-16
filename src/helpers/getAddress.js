export function getAddress(data) {
  const arrey = data.split(' ').slice(-2);
  const firstWord = arrey[0].slice(0, arrey[0].length - 1);
  const secondWord = arrey[1];

  const result = `${firstWord} | ${secondWord}`;
  return result;
}
