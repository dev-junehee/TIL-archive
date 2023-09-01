// chatAt 메서드 활용
function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
    .join(" ");
}

// 런타임 에러로 실패한 답변
// map(), toUpperCas() 활용
function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((i) => i[0].toUpperCase() + i.slice(1))
    .join(" ");
}
