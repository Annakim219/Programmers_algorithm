function solution(n) {
  let result =
    n % 2 === 0 ? "수박".repeat(n / 2) : "수박".repeat((n - 1) / 2) + "수";
  return result;
}
