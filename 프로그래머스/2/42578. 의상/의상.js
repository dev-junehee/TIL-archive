function solution(clothes) {
    let hash = new Map();
    
    for (const [_, cloth] of clothes) {
        if (hash.has(cloth)) {
            hash.set(cloth, hash.get(cloth) + 1)
        } else {
            hash.set(cloth, 1)
        }
    }
    
    return [...hash.values()].reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}