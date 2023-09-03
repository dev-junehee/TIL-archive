function solution(num1, num2) {
  let gcd = 1;
  let lcm = 1;

  // 최대공약수
  for (let i = 1; i <= Math.max(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  // 최소공배수
  while (true) {
    if (lcm % num1 === 0 && lcm % num2 === 0) {
      break;
    }
    lcm++;
  }

  return [gcd, lcm];
}

// 유클리드 호제법
function solution(num1, num2) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(num1, num2), lcm(num1, num2)];
}

// 두 양의 정수 a, b (a > b)에 대하여 a를 b로 나눈 나머지가 0이면 b가 최대공약수이고,
// 나머지가 0이 아니라면 b와 a % b값을 계속해서 나누면 나오는 마지막 수가 최대공약수이다.
// 두 양의 정수 a, b에 대하여 두 수를 곱한 값을 최대공약수로 나눈 값이 최소공배수이다.ㄴ
