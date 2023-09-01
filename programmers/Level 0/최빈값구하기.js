function solution(array) {
  // Map 생성
  let map = new Map();

  // Map 초기화
  for (let i = 0; i <= Math.max(...array); i++) {
    map.set(i, 0);
  }

  for (let i = 0; i < array.length; i++) {
    map.set(array[i], map.get(array[i]) + 1);
  }

  // map의 값만으로 새로운 배열 생성
  const newArr = Array.from(map.values());
  // map의 값들 중 최대값 구하기
  const max = Math.max(...newArr);

  if (array.length === 1) {
    return array[0];
  } else if (newArr.indexOf(max) === newArr.lastIndexOf(max)) {
    return newArr.indexOf(max);
  } else {
    return -1;
  }
}
