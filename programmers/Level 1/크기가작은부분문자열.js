// ver.1
function solution(t, p) {
  let answer = 0;

  for (let i = 0; i < t.length; i++) {
    let newT = t.slice(i, i + p.length);
    if (newT.length === p.length && newT - p <= 0) answer++;
  }

  return answer;
}

// ver.2
function solution(t, p) {
  let answer = 0;

  for (let i = 0; i < t.length; i++) {
    let newT = t.slice(i, i + p.length);
    if (newT.length === p.length && newT <= p) answer++;
  }

  return answer;
}

// 인덱스 번호를 이용
// for문을 통해 첫 번째 인덱스부터 반복문을 돈다.
// 숫자 문자열 `t`에서 `slice` 함수를 통해 인덱스 `i`부터 `i+p.length` 까지 잘라 `newT` 변수에 할당하고
// (p.length가 아닌 i+p.length 이유는 slice 함수가 두 번째 매개변수는 포함하지 않기 때문에)
// 만약 `newT`의 길이가 `p`의 길이와 같고, `p`의 숫자보다 작거나 같다면 `answer + 1` (개수를 출력하는 것이므로)
