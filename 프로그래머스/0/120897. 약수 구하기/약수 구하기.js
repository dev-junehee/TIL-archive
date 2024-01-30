function solution(n) {
    let divisors = new Set();
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            divisors.add(i);
            divisors.add(n / i);
        }
    }
    
    return [...divisors].sort((a, b) => a - b);
}