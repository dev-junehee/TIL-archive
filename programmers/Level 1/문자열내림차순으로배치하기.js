// split() 메서드
function solution(s) {
  return s.split("").sort().reverse().join("");
}

// 전개연산자
function solution(s) {
  return [...s].sort().reverse().join("");
}
