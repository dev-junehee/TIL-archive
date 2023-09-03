function solution(k, score) {
  let answer = [];
  let stack = [];

  score.forEach((v) => {
    stack.push(v);
    stack.sort((a, b) => b - a);

    if (stack.length >= k) {
      answer.push(stack[k - 1]); // 명예의 전당의 길이보다 점수가 많을 경우
    } else {
      answer.push(stack[stack.length - 1]);
    }
  });

  return answer;
}

// 명예의 전당의 길이가 k보다 클 경우, k번째 이후 점수는 명예의 전당에 포함되지 않기 때문에 k-1 인덱스를 추가
// 명예의 전당의 길이가 k보다 작을 경우, 명예의 전당의 가장 마지막 인덱스(length - 1)을 추가
