function solution(slice, n) {
  return Math.ceil(n / slice);
}

// while문 활용
function solution(slice, n) {
  let i = 1;

  while (slice * i < n) {
    i++;
  }

  return i;
}
