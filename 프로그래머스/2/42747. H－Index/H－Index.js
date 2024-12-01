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