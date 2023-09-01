// if문 활용
function solution(dot) {
  let answer = 0;

  if (dot[0] > 0 && dot[1] > 0) answer += 1;
  else if (dot[0] < 0 && dot[1] > 0) answer += 2;
  else if (dot[0] < 0 && dot[1] < 0) answer += 3;
  else if (dot[0] > 0 && dot[1] < 0) answer += 4;

  return answer;
}

// 삼항연산자 활용
function solution(dot) {
  let [x, y] = dot;
  return x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3;
}
