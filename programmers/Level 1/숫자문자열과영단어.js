function solution(s) {
  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (let [key, value] of Object.entries(numbers)) {
    let regExp = new RegExp(key, "g");
    s = s.replace(regExp, value);
  }

  return +s;
}

// 객체, 배열 반복문, 정규식 사용
// for ~ of 배열 반복문을 통해 `numbers`의 `key`와 `value`를 사용
// 그러기 위해서는 `numbers`를 배열로 변환 시켜야 하는데, 이때 `Object.entries` 메소드 사용
// 인자로 주어진 객체의 [key, value] 쌍의 배열 반환 (e.g. `[”zero”, 0]` )
// 주어진 문자열 `s`에서 `replace`를 통해 `key`값을 `value`로 변경 (정규식 사용)
// s는 문자열이므로 원래 숫자를 찾기 위해서 +(단항 더하기) 연산자 사용
// 처음 사용해본 것 :
// `for ~ of` 배열 순환 반복문 / `Object.entries` 메소드 (객체 → 배열) / `new RegExp` 생성자 함수
