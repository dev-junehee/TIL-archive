function solution(sizes) {
  let sort = sizes.map(([width, height]) =>
    width > height ? [width, height] : [height, width]
  );

  let w = sort.map((v) => v[0]);
  let h = sort.map((v) => v[1]);

  return Math.max(...w) * Math.max(...h);
}

// 최소 직사각형이지만 가장 큰 크기의 카드도 들어가야 하므로 지갑의 크기 = 제일 큰 카드 크기
// 카드 크기 배열 `sizes`를 `map` 함수를 통해 정렬한 `sort` 배열 생성 (가로 사이즈가 더 큰 순서대로)
// 정렬된 `sort` 배열에서 가로 사이즈로만 이루어진 배열 `w`, 세로 사이즈로만 이루어진 배열 `h` 생성
// `w`와 `h`에서 각각 가장 큰 수를 곱하여 출력한다. (가로에서 가장 큰 수 / 세로에서 가장 큰 수)
