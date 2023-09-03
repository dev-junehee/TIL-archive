function solution(n) {
  let x = 1;
  while (true) {
    // n % x === 1 ? return x : x++
    if (n % x === 1) return x;
    x++;
  }
}
