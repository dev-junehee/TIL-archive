function solution(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }
  return count;
}

// 순서쌍의 개수는 곧 `n`의 약수의 개수를 나타내는 것과 같으므로
// `n`을 `i`로 나눴을 때 나머지가 0이면 `i`는 `n`의 약수이므로 `count`를 하나씩 늘려가며 약수의 개수를 구한다.
