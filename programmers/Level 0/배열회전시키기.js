function solution(numbers, direction) {
  return direction === "right"
    ? [numbers.pop(), ...numbers]
    : [...numbers.slice(1), numbers.shift()];
}

// shift() : 배열의 첫 번째 요소를 제거하고 해당 요소 반환
// pop() : 배열의 마지막 요소를 제거하고 해당 요소 반환
