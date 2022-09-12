function solution(n) {
  let sqrtNum = Math.sqrt(n);
  if (Number.isInteger(sqrtNum)) {
    return Math.pow(sqrtNum + 1, 2);
  } else {
    return -1;
  }
}
