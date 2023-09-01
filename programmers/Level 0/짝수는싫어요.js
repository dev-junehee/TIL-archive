// for문
function solution(n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) answer.push(i);
  }

  return answer;
}

// for문 조건에서 i+=2
function solution(n) {
  var answer = [];

  for (let i = 1; i <= n; i += 2) answer.push(i);

  return answer;
}
