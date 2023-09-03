function solution(nums) {
  let answer = 0;
  let monster = [...new Set(nums)];

  if (monster.length > nums.length / 2) {
    answer = nums.length / 2;
  } else {
    answer = monster.length;
  }

  return answer;
}

// `nums` = 폰켓몬의 종류 번호가 담긴 1차원 배열
// 최대한 다양한 종류의 폰켓몬을 선택해야 하므로 `new Set`을 통해 폰켓몬 종류에서 중복을 삭제
// `nums`는 항상 짝수로 주어지므로 가져갈 수 있는 폰켓몬의 수 `nums.length / 2`도 항상 짝수
// 만약 폰켓몬의 종류(monster.length)가 가져갈 수 있는 폰켓몬의 수보다 크다면
// 해당 종류 중에서 N/2마리를 골라야 하므로 `answer = nums.length / 2` (폰켓몬의 수)
// 반대로 폰켓몬의 종류(monster.length)가 가져갈 수 있는 폰켓몬의 수보다 적다면
// 모든 종류를 다 가져갈 수 있으므로 `answer = monster.length` (폰켓몬의 종류)

// Short coding
function solution(nums) {
  let monster = [...new Set(nums)];
  let max = nums.length / 2;

  return monster.length > max ? max : monster.length;
}
