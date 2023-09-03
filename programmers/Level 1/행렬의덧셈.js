function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let sum = [];
    for (let j = 0; j < arr1[0].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(sum);
  }

  return answer;
}

// 정답을 출력해줄 `answer` 변수에 빈 배열 할당
// 매개변수 `arr1`과 `arr2`의 길이는 같으므로, 둘 중 하나의 길이로 for문을 통해 인덱스 번호를 반복한다.
// 다시 이중 for문으로 배열 안의 배열(요소)에 접근해서 `arr1`과 `arr2`의 같은 위치에 있는 값을 더해준다.
// (`arr1[i][j] + arr2[i][j]`)
// 더한 값을 `sum` 이라는 빈 배열이 담긴 변수에 `push`를 해주는데, `sum`이 필요한 이유는 중첩 배열로 출력되어야 하기 때문이다.
// 각 행과 열의 값을 더한 `sum` 배열을 다시 `answer`에 `push`하여 출력한다.
