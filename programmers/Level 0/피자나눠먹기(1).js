// Math 메서드 활용
function solution(n) {
  return Math.ceil(n / 7);
}

// 더블틸드, 삼항연산자 활용
function solution(n) {
  return ~~(n / 7) + (n % 7 ? 1 : 0);
}

// 더블틸드(~~) : 이중 NOT 비트 연산자
// 양수에 대해서 Math.floor(), 음수에 대해서 Math.ceil()
