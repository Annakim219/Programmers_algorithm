// 최대공약수 구하기
const gcd = (n, m) => {
  const remainder = n % m;
  return remainder === 0 ? m : gcd(m, remainder);
};

// 최소공배수 구하기
const lcm = (n, m) => {
  return (n * m) / gcd(n, m);
};

function solution(n, m) {
  var answer = [gcd(n, m), lcm(n, m)];
  return answer;
}
