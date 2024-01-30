function solution(n) {
    let factors = [1];
    
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) factors.push(i);
    }
    
    return factors.sort((a, b) => a - b);
}