// for문
function solution(arr) {
  let answer = 0;
  for (i = 0; i < arr.length; i++) {
    answer += arr[i];
  }

  return answer / arr.length;
}

// reduce()
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
