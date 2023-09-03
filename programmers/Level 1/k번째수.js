function solution(array, commands) {
  let answer = [];
  for (let command of commands) {
    const [i, j, k] = command;
    answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  }
  return answer;
}

// 정답을 출력할 배열 `answer`
// `depth`가 `2`인 배열을 `for ~ of` 배열 순환 반복문을 통해 각각의 데이터에 접근
// `[i, j k]` 구조 분해 할당으로 각각의 데이터 `command` 내의 데이터 접근
// `slice()` 메서드는 배열의 `start`부터 `end-1` 까지 잘라낸다.
// 문제에서의 i번째 ~ j번째는 단순한 데이터의 순서(length)이므로 인덱스값으로 접근하기 위해서는 `slice(i-1, j)` 으로 접근
// 자른 데이터를 `sort()` 메서드를 통해 오름차순으로 정렬 후 3번째 데이터의 인덱스 값은 2이므로 `[k-1]`
