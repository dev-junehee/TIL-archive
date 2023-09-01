// 무작위 수 경우
function solution(numbers) {
  return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
}

// 연속된 수 경우
function solution(numbers) {
  return (numbers[0] + numbers[numbers.length - 1]) / 2;
}
