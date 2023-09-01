function solution(numbers, k) {
  let player = 1;

  for (let i = 0; i < k - 1; i++) {
    player += 2;
    if (player > numbers.length) {
      player -= numbers.length;
    }
  }

  return player;
}
