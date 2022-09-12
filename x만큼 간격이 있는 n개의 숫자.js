function solution(x, n) {
  var answer = [];

  for (let i = 1; i <= n; i++) {
    let pushNum = x * i;
    answer.push(pushNum);
  }

  return answer;
}
