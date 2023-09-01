function solution(n) {
  let even = [];

  for (let i = 0; i <= n; i += 2) {
    even.push(i);
  }

  return even.reduce((acc, cur) => acc + cur);
}

// 수열 공식을 이용한 풀이
function solution(n) {
  let half = Math.floor(n / 2);
  return half * (half + 1);
}
