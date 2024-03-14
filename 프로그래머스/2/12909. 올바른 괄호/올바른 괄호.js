function solution(s){
    let bracket = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            bracket.push(s[i]);
        } else {
            if (bracket.length > 0) bracket.pop();
            else return false;
        }
    }

    return bracket.length === 0;
}