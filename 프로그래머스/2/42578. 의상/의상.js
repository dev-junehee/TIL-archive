function solution(clothes) {
    // 순서가 있는 key-value 형태 객체로 저장
    let hash = new Map();
    
    // 같은 이름을 가진 의상이 존재하지 않으므로 의상명을 중복 체크할 필요 없이 수량만 카운트
    for (const [_, category] of clothes) {
        if (hash.has(category)) {          // hash에 카테고리가 있는 경우
            let count = hash.get(category)  // 몇개 있는지 체크
            hash.set(category, count + 1)   // 기존 값에 하나 추가
        } else {
            hash.set(category, 1)           // hash에 없는 경우는 1로 초기 설정
        }
    }

    // 의상을 조합할 수 있는 수
    // 0으로 설정하면 곱셈이 안됨
    let total = 1;
    
    // hash에 저장된 의상 수를 순회
    for (const count of [...hash.values()]) {
        total *= count + 1 // 입지 않는 경우를 추가
    }
    
    // 최소 1개 의상은 입어야 하므로 아무것도 입지 않은 경우를 제외
    return total - 1
}

// reduce를 사용하여 한 번에 처리도 가능
// return [...hash.values()].reduce((acc, cur) => acc * (cur + 1), 1) - 1;
