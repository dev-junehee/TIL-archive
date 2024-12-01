function solution(citations) {
    // 최대값을 구하므로 내림차순 정렬
    // [6, 5, 3, 1, 0]
    citations.sort((a, b) => b - a)
    
    // H-Index 선언
    let hIndex = 0;
    
    // 가장 많은 인용부터 시작
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] > hIndex) hIndex++;
    }
    return hIndex;
}

// citations[0] : 6
// 6 > 0 (O)
// h = 1

// citations[1] : 5
// 5 > 1 (O)
// h = 2

// citaitions[2] : 3
// 3 > 2 (O)
// h = 3

// citaitons[3] : 1
// 1 > 3 (X)
// 여기서 끝
