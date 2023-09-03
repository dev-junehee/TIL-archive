// for문 활용
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

// 참가자와 완주자 배열을 `sort()` 메서드를 통해 문자열 유니코드 순서로 정렬
// 참가자와 완주자 배열의 인덱스 0번부터 for문으로 반복하며 다른 요소를 찾아내어 `return`

// 해시 풀이 (Map 활용)
function solution(participant, completion) {
  const hash = new Map();

  for (let i = 0; i < participant.length; i++) {
    let p = participant[i]; // leo, kiki, eden
    let c = completion[i]; // eden, kiki

    // 참가하면 +1, 완주하면 -1
    map.set(p, (map.get(p) || 0) + 1); // leo = 1, kiki = 1, eden = 1
    map.set(c, (map.get(c) || 0) - 1); // eden = -1, kiki = -1,
    // map : { leo => 1, eden => 0, kiki => 0 }
  }

  for (let [k, v] of map) {
    // 0보다 크다 = 참가만 했다
    if (v > 0) return k;
  }

  return false;
}

// 맵(Map) : 객체와 유사하지만, 키가 있는 데이터를 저장하며 다양한 자료형을 허용
// `new Map()` 메서드로 새로운 맵 생성
// 반복문을 통해 참가자(participant)만큼 반복문을 돌아주고, 참가자와 완주자를 각각 변수 `p`, `c`에 할당
// `map.set(key, value)` 메서드로 `key`를 이용해 `value`를 저장하는데, `key`는 참가자와, 완주자의 이름으로, value는 기존의 값에 각각 +1, -1
// 처음에는 `p = leo`, `c = eden`, 원래 값이 없으니까 `leo = 0 + 1`, `eden = 0 - 1`
// 두 번째는 `p = kiki`, `c = kiki`, 원래 값이 없으니까 `kiki = 1` 이지만 다시 `c`에서 원래 값이 1로 할당되기 때문에 결국 `kiki = 0`
// 세 번째는 `p = eden`, `c = undefined`, 기존 값이 -1로 설정되어 있기 때문에 다시 +1 해주면 결국 `eden = 0`
// for ~ of
