function solution(n) {
  var answer = 0;

  let str = n.toString();
  let str_split = str.split("");

  for (let i = 0; i < str_split.length; i++) {
    answer += parseInt(str_split[i]);
  }

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");

  return answer;
}
