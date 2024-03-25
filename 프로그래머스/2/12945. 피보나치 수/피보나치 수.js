function solution(n) {
    let fibo = [0, 1];

    for (let i = 2; i <= n; i++) {
        let result = fibo[i-2] + fibo[i-1];
        fibo.push(result % 1234567);
    }
    
    return fibo[n];
}