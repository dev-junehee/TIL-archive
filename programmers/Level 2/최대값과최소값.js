function solution(s) {
  let min = Math.min(...s.split(" "));
  let max = Math.max(...s.split(" "));
  return `${min} ${max}`;
}

// 참고사항
// Math.max, Math.min 메소드는 문자열 구분이 가능하다 (숫자로 출력)
const arrStr = ["1", "2", "3", "4", "5"];
const arrNum = [1, 2, 3, 4, 5];

Math.max(...arrStr); // 5
Math.min(...arrStr); // 1

Math.max(...arrNum); // 5
Math.min(...arrNum); // 1
