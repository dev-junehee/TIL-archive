function solution(intStrs, k, s, l) {
    let answer = [];
    for (let i = 0; i < intStrs.length; i++) {
        const part = Number(intStrs[i].slice(s, s+l));
        if (part > k) answer.push(part)
    }
    return answer;
}