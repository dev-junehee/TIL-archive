function solution(n) {
  let newArr = [];
  const combi = (n) => (n === 0 ? 1 : n * combi(n - 1));

  for (i = 1; i <= 10; i++) {
    if (combi(i) <= n) {
      newArr.unshift(i);
    }
  }
  return newArr[0];
}
