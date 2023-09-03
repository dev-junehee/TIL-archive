// if ~ else
function solution(num) {
  let answer = ["Even", "Odd"];

  if (num % 2 === 0 || num === 0) {
    return answer[0];
  } else {
    return answer[1];
  }
}

// 삼항연산자
function solution(num) {
  return num % 2 ? "Odd" : "Even";
}
