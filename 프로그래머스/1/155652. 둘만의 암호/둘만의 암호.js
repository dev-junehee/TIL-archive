function solution(s, skip, index) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const change = [...alphabet].filter(char => !skip.includes(char));
    
    let answer = '';
    
    for (let char of s) {
        let newIdx = (change.indexOf(char) + index) % change.length;
        answer += change[newIdx];
    }

    return answer;
}