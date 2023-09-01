function solution(numbers) {
  let sort = [...numbers].sort((a, b) => b - a);
  return sort[0] * sort[1];
}

// 구조분해할당
function solution(numbers) {
  let [a, b] = numbers.sort((a, b) => b - a);
  return a * b;
}
