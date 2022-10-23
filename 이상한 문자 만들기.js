function solution(s) {
  let sArr = s.split(" ");
  let insert = "";
  let answer = [];
  for (let i = 0; i < sArr.length; i++) {
    for (let j = 0; j < sArr[i].length; j++) {
      j % 2 === 0
        ? (insert += sArr[i][j].toUpperCase())
        : (insert += sArr[i][j].toLowerCase());
    }
    answer.push(insert);
    insert = "";
  }
  return answer.join(" ");
}

// 아래는 전체 문자열 전체의 짝/홀수 인덱스로 잘못짠 것...
// function solution(s) {
//   let char = " abcdefghijklmnopqrstuvwxyz";
//   let answer = s[0].toUpperCase();
//   for (let i = 1; i < s.length; i++) {
//     if (char.indexOf(s[i]) !== 0) {
//       // 공백이 아닐 경우,
//       if (char.indexOf(s[i]) % 2 === 0) {
//         // 짝수일 경우,
//         answer += s[i].toUpperCase();
//       } else {
//         // 홀수일 경우
//         answer += s[i].toLowerCase();
//       }
//     } else {
//       // 공백일 경우
//       answer += " ";
//     }
//   }
//   return answer;
// }
