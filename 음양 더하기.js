function solution(abs, signs) {
  let result = 0;
  for (let i = 0; i < abs.length; i++) {
    signs[i] ? (result += abs[i]) : (result += abs[i] * -1);
  }
  return result;
}
