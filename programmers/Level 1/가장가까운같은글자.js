function solution(s) {
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    let before = s.slice(0, i).split("").reverse();
    if (before.includes(s[i])) {
      answer.push(before.indexOf(s[i]) + 1);
    } else {
      answer.push(-1);
    }
  }

  return answer;
}

// 문자열 `s`의 각 위치보다 앞에 있는 모든 문자열에서 같은 글자를 찾아야 한다.
// 반복문을 통해 문자열의 `s[0]` 부터 `s[i]` 까지 자른 뒤 `split`을 통해 배열로 전환, `reverse`를 통해 역방향 전환한 값을 `before` 변수에 저장 (ex. [n, a, b])
// 역방향으로 전환하는 이유는 현재 위치에서 가까운 문자열을 찾는 것이기 때문에, 역방향으로 바꿔서 가장 먼저 찾아지는 것이 현재 위치에서 가장 가까운 문자
// 만약 `before` 배열에 현재 반복문을 돌고있는 `s[i]` 가 포함되어 있을 경우 `indexOf` 메서드로 위치를 찾은 다음, 인덱스가 아닌 현재 위치와의 거리를 추가해야 하기 때문에 `idx + 1` 값을 `answer` 에 `push`
// `s[i]` 가 포함되어 있지 않은 경우에는 `answer.push(-1)`
