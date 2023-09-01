// 전개연산자를 사용한 배열 복사
function solution(emergency) {
  let order = [...emergency].sort((a, b) => b - a);
  return emergency.map((v) => order.indexOf(v) + 1);
}

// for 반복문 활용
const solution = (emergency) => {
  temp = new Array(emergency.length).fill(1);
  for (i = 0; i < emergency.length; i++) {
    for (j = 0; j < emergency.length; j++) {
      if (emergency[i] < emergency[j]) temp[i]++;
    }
  }
  return temp;
};
