// push() 메서드 활용
function solution(x, n) {
  let answer = [];

  for (i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
}

// Array(), fill(), map() 메서드 활용
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
