function solution(x) {
  let num = x.toString().split("");
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }

  return x % sum === 0 ? true : false;
}
