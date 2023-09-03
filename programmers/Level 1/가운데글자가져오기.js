// if ~ else
function solution(s) {
  if (s.length % 2 === 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    return s[Math.floor(s.length / 2)];
  }
}

// 삼항연산자
function solution(s) {
  let x = s.length;

  return x % 2 === 0 ? s[x / 2 - 1] + s[x / 2] : s[Math.floor(x / 2)];
}
