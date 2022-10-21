// 원래 이용료 price
// count (N) 횟수 당 price + price ...로 늘어남
// 얼마가 부족한지 구하라
// 1. price 3원 *  횟수 1회 = 이용료 3원, money 20원 - 이용료 3원 = answer 17원
// 2. price 3원 * 횟수 2회 = 총 이용료 3*2원 money 20원 - 이용료 3 + (3*2)원 = answer 11원
// 3. price 3원 * 횟수 3회 = 총 이용료 3*3원 money 20원 - 이용료 3 + (3*2)원 + (3*3) = answer 2원
// 4. price 3원 * 횟수 4회 = 총 이용료 3*4원 money 20원 - 이용료 3 + (3*3)원 + (3*4) = answer -10원
// money가 0보다 작아지면 return -(-10원)

function solution(price, money, count) {
  let t_price = 0;
  for (let i = 1; i <= count; i++) {
    t_price += price * i;
  }
  return t_price > money ? t_price - money : 0;
}
