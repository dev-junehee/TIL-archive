// 정규표현식 활용
function solution(babbling) {
  let can = babbling.map((i) => i.replace(/aya|ye|woo|ma/gi, ""));
  return can.filter((item) => item === "").length;
}
