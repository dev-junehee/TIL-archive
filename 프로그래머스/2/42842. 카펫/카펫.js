function solution(brown, yellow) {
    let carpet = brown + yellow
    
    // 노란색이 1개일 때 카펫의 가로 세로는 최소 3이기 때문에 3으로 시작
    for (let i = 3; i < carpet; i++) {
        let width = i
        let height = carpet / i
        
        // 가로가 세로보다 작으면 건너뛰기
        if (width < height) continue;
        // brown은 한줄씩 감싸져있기 때문에 가로-2, 세로-2 값이 yellow와 같으면 정답
        if ((width - 2) * (height - 2) === yellow) {
            return [width, height]
        }
    }
}