function solution(s) {
  var answer = true;
  let pNum = 0;
  let yNum = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      pNum += 1;
    } else if (s[i] === "y" || s[i] === "Y") {
      yNum += 1;
    }
  }

  if (pNum === yNum) {
    answer = true;
  } else {
    answer = false;
  }

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");

  return answer;
}
