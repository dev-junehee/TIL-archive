// Array.from() 얕은 복사로 배열 생성
function solution(my_string) {
  return Array.from(my_string).reverse().join("");
}

// 배열 리터럴 + 전개 연산자
function solution(my_string) {
  return [...my_string].reverse().join("");
}

// split() 메서드를 통해 배열화
function solution(my_string) {
  return my_string.split("").reverse().join("");
}
