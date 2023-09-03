function solution(s) {
  let answer = "";
  let arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      j % 2 === 0
        ? (answer += arr[i][j].toUpperCase())
        : (answer += arr[i][j].toLowerCase());
    }
    answer += " ";
  }

  return answer.substring(0, answer.length - 1);
}

// `split` 메소드를 사용하여 주어진 문자열을 공백 단위로 잘라 배열화 한다. (단어 배열)'
// 이중 for문을 사용해 단어 배열 arr의 각 요소(단어)의 알파벳에 접근한다.
// 각 알파벳의 인덱스 번호가 짝수이면 대문자로 변경 (`toUpperCase`)
// 각 알파벳의 인덱스 번호가 홀수이면 소문자롭 변경 (`toLowerCase`)
// 가장 마지막에 있는 공백을 제외하고 출력한다.
// `answer += " "` 대신 `arr[i].length - 1` 활용할 방법이 있을 것 같았는데 찾지 못했다.
