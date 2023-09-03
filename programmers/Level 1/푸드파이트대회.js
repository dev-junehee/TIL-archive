function solution(food) {
  let answer = "";

  for (let i = 1; i < food.length; i++) {
    answer += String(i).repeat(parseInt(food[i] / 2));
  }

  let reverse = [...answer].reverse().join("");

  return answer + "0" + reverse;
}

// 음식의 칼로리 = 음식의 순서 = `idx + 1`
// 반복문을 통해 칼로리가 가장 낮은 음식인 1 부터 `answer` 에 더해주는데,
// 이 때 두 명의 푸드 파이트 선수가 나눠먹을 수 있는 부분, 즉 `food` 를 2로 나눈 뒤 정수값만큼 반복하여 더해준다.
