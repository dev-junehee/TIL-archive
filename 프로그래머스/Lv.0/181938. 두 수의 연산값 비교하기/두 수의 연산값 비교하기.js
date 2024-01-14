function solution(a, b) {
    let plus = parseInt(String(a) + String(b), 10);
    let mult = 2 * a * b;
    
    let answer = [plus, mult].sort((a, b) => b - a);
    
    return answer[0];
}