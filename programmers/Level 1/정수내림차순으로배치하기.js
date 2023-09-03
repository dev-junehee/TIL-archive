function solution(n) {
  let num = String(n);
  let arr = num.split("");
  arr.sort((a, b) => b - a);

  return Number(arr.join(""));
}

// 메서드 체이닝
function solution(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
