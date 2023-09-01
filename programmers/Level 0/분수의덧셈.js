function solution(numer1, denom1, numer2, denom2) {
  let a = denom1 * denom2;
  let b = numer1 * denom2 + numer2 * denom1;
  let gcd = 1;

  for (let i = 2; i <= a; i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }

  return [b / gcd, a / gcd];
}

// 변수 a는 두 분수를 더했을 때 분모
// 변수 b는 두 분수를 더했을 때 분자
// 변수 gcd는 공약수, 초기값 1 설정 (1은 모든 정수의 약수)
// 최대공약수를 찾기 위한 for 반복문의 조건으로 let i = 2; i <= a; i++
// a와 b를 i로 나눴을 때, 나머지가 모두 0이라면 i는 a와 b의 공약수이므로 gcd에 할당
// 분자 b를 최대공약수 gcd로 나눈 값과 분모 a를 최대공약수 gcd로 나눈 값을 배열에 담아 출력
