function solution(s, n) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const lower = "abcdefghijklmnopqrstuvwxyz".split("");
    
    let newS = [];
    
    // ["A", "B"]
    for (let char of s.split('')) {
        if (char.match(new RegExp(/^[a-z]/))) {
            let idx = lower.indexOf(char) + n
            if (idx >= lower.length) idx -= lower.length
            newS.push(lower[idx])
        } else if (char.match(new RegExp(/^[A-Z]/))) {
            let idx = upper.indexOf(char) + n
            if (idx >= upper.length) idx -= upper.length
            newS.push(upper[idx])
        } else {
            newS.push(char);
        }
    }
    
    return newS.join('');
}