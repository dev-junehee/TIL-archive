function solution(a, b) {
    let AB = parseInt(String(a) + String(b), 10);
    let BA = parseInt(String(b) + String(a), 10);
    
    return Math.max(AB, BA)
}