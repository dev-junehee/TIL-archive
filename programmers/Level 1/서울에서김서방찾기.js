// 변수 선언
function solution(seoul) {
  const findKim = seoul.indexOf("kim");
  return `김서방은 ${findKim}에 있다.`;
}

// 변수 선언 생략
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}
