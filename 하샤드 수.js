function solution(x) {
  //  x % 자릿수의 합 === 0 true
  let xArr = String(x)
    .split("")
    .map((el) => Number(el));
  let xSum = 0;

  for (let i = 0; i < xArr.length; i++) {
    xSum += xArr[i];
  }

  if (x % xSum === 0) {
    return true;
  } else {
    return false;
  }
}
