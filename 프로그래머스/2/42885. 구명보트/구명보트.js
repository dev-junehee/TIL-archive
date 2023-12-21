function solution(people, limit) {
    let boat = 0;
    let i = 0;
    let j = people.length - 1;
    
    // 무거운 순서대로 정렬
    people.sort((a, b) => b - a);
    
    while (i < j) {
        let sum = people[i] + people[j];
        
        if (sum > limit) {
            boat += 1;
            i += 1;
        } else {
            boat += 1;
            i += 1;
            j -= 1;
        }
        
        if (i === j) boat += 1;
    }
    
    return boat;
}