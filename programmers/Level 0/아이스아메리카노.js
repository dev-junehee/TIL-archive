// 변수 선언
function solution(money) {
  let coffee = Math.floor(money / 5500);
  let change = money % 5500;

  return [coffee, change];
}

// 변수 선언 생략
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}
