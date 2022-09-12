function solution(n) {
  let result = Number(String(n).split("").sort().reverse().join(""));
  return result;
}
