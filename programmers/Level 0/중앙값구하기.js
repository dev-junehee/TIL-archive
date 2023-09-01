// 변수 선언
function solution(array) {
  let newArr = array.sort((a, b) => a - b);
  return newArr[Math.floor(newArr.length / 2)];
}

// 변수 선언 생략
function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

// sort() 메서드는 원본을 변경하므로 굳이 변수 선언을 하지 않아도 된다
