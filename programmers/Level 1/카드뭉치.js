function solution(cards1, cards2, goal) {
  for (let word of goal) {
    if (cards1[0] === word) cards1.shift();
    else if (cards2[0] === word) cards2.shift();
    else return "No";
  }
  return "Yes";
}

// `for ~ of` 문을 통해 단어 배열 `goal`에 있는 단어 `word`를 순회
// `cards1[0]` 과 `cards2[0]` 이 `word`와 같을 때 `shift()` 메서드를 통해 해당 요소 제거
// 각 배열의 첫 번째 인덱스 [0]과 `word`가 일치하지 않을 경우 카드 뭉치에서 순서대로 단어를 사용하지 않는 것이기 때문에 `return ‘No’`
// `for ~ of` 문을 모두 통과하면 단어가 순서대로 정렬되어 있는 것이므로 `return ‘Yes’`
