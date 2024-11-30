function solution(people, limit) {
    // 몸무게 적은 순으로 정렬
    people.sort((a, b) => a - b)

    // 보트 개수, 가장 앞의 사람, 가장 뒤의 사람 설정
    let boat = 0;
    let front = 0;
    let back = people.length - 1;
    
    while (front <= back) {
        let sum = people[front] + people[back]
        if (sum > limit) { // 무거운 사람 한명만 탈 수 있음
            boat++;
            back--;
        } else {  // 두명 다 탈 수 있음
            boat++;
            front++;
            back--;
        }
    }
    
    return boat;
    
    
    return boat;
}