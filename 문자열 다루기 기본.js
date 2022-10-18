function solution(s) {
  let answer;
  if (s.length === 4 || s.length === 6) {
    let sArr = s.split("").filter((el) => isNaN(el));
    if (sArr.length > 0) {
      answer = false;
    } else {
      answer = true;
    }
  } else {
    answer = false;
  }
  return answer;
}
