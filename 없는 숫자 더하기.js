function solution(num) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    num.indexOf(i) === -1 ? (sum += i) : sum;
  }
  return sum;
}
