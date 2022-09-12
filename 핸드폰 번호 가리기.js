function solution(phone_number) {
  var answer = "";
  let pNum = phone_number.length;
  let lastNum = phone_number.slice(pNum - 4, pNum.length);
  for (let i = 0; i < pNum - 4; i++) {
    answer = answer + "*";
  }
  return answer + lastNum;
}
