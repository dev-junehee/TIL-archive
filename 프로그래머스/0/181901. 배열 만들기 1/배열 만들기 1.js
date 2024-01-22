function solution(n, k) {
    let answer = [];
    
    while (n) {
        if (n % k === 0) answer.push(n);
        n--;
    }
    
    return answer.sort((a, b) => a - b);
}