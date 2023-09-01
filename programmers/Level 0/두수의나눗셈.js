// 변수 선언
function solution(num1, num2) {
  let answer = (num1 / num2) * 1000;
  return Math.floor(answer);
}

// 변수 선언 생략
function solution(num1, num2) {
  return Math.floor((num1 / num2) * 1000);
}
