// for 반복문
function solution(d, budget) {
  let count = 0;

  // 신청 금액 정렬 (오름차순)
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    if (d[i] > budget) break;
    count++;
    budget -= d[i];
  }

  return count;
}

// while 반복문
function solution(d, budget) {
  // 신청 금액 정렬 (오름차순)
  d.sort((a, b) => a - b);

  // 신청 금액 총합
  let sum = d.reduce((acc, cur) => acc + cur);

  while (sum > budget) {
    d.pop(); // 많은 부서를 지원하기 위해 큰 예산부터 줄이기
  }

  return d.length;
}
