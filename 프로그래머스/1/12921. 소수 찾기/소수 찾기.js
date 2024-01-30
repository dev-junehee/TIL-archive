function solution(n) {
    let answer = 0;
    
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) answer++;
    }
    
    return answer;
}

function isPrime(n) {
    if (n === 1) return false;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0 && n * i !== n) return false;
    }
    
    return true;
}