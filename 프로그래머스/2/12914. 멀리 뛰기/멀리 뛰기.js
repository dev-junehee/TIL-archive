function solution(n) {
    if (n <= 2) return n;
    
    let arr = [1, 1];
    
    for (let i = 2; i <= n; i += 1) {
        arr.push((arr[i - 1] + arr[i - 2]) % 1234567);
    }
    
    return arr[n]
}