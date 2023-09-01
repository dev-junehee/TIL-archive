// switch 활용
function solution(angle) {
  switch (angle > 0) {
    case angle < 90:
      return 1;
      break;
    case angle === 90:
      return 2;
      break;
    case angle > 90 && angle < 180:
      return 3;
      break;
    case angle === 180:
      return 4;
  }
}

// 삼항연산자 활용
function solution(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}
