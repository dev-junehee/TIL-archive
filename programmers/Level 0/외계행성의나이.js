// 배열 설정
function solution(age) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  return age
    .toString()
    .split("")
    .map((i) => alphabet[i])
    .join("");
}

// map() 활용
function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}

// String.fromCharCode 정적 메서드 활용
function solution(age) {
  return age
    .toString()
    .split("")
    .map((n) => String.fromCharCode(97 + Number(n)))
    .join("");
}
