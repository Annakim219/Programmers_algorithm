function solution(a, b) {
  let min = a;
  let max = b;
  let result = 0;

  if (a > b) {
    min = b;
    max = a;
  }

  if (min === max) {
    return max;
  }

  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
}
