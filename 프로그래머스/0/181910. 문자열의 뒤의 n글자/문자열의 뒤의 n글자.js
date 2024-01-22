function solution(my_string, n) {
    let answer = [];
    let str = [...my_string].reverse();
    
    for (let i = 0; i <= n; i++) {
        answer.push(str[i - 1]);
    }
    
    return answer.reverse().join('')
}