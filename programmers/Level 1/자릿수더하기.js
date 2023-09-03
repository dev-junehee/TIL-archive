function solution(n) {
  let arr = n.toString().split("");
  return arr.reduce((a, b) => a + parseInt(b), 0);
}
