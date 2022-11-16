function solution(s) {
  const num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = s;
  for (let i = 0; i < 10; i++) {
    if (answer.indexOf(num[i]) !== -1) {
      let result = answer.split(num[i]);
      answer = result.join(String(i));
    }
  }
  return Number(answer);
}
