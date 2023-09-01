// for문, push() 활용
function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    answer.push(numbers[i] * 2);
  }

  return answer;
}

// map() 활용
function solution(numbers) {
  return numbers.map((v) => v * 2);
}

// reduce() 활용
function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}
