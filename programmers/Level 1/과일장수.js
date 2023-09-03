// k = 최상품 사과의 점수
// m = 한 상자에 들어가는 사과의 수
// score = 사과들의 점수

function solution(k, m, score) {
  if (score.length < m) return 0;

  let totalPrice = 0;
  score.sort((a, b) => a - b);

  while (score.length >= m) {
    let box = score.splice(score.length - m, m);
    let price = box[0] * box.length;
    totalPrice += price;
  }

  return totalPrice;
}

// 이익이 나지 않는다 = 한 상자의 들어가는 사과의 수가 충족되지 않는다
// 즉, `score.length`가 `m`보다 작기 때문에 해당 경우에는 `return 0`
// `totalPrice` = 총 이익
// 사과들의 점수가 들어있는 배열 `score`를 오름차순으로 정렬한다
// `score`가 한 박스의 크기인 보다 크거나 같을 경우동안 반복문을 돌아준다
// 최고 점수를 구해야 하므로 한 상자에 들어가는 갯수 `m`개씩 자른 배열 = `box`
// `.splice(score.length-m, m)` 는 오름차순 정렬된 사과 중 가장 높은 점수 부분부터 자르기 위해
// 사과 한 박스(box)의 가격은 박스에 들어있는 사과 중 낮은 점수와 사과의 갯수를 곱한 가격이므로
// `box[0]`과 `box.length`를 곱한 값을 `totalPrice`에 누적
// 최종 `totalPrice` 를 출력
