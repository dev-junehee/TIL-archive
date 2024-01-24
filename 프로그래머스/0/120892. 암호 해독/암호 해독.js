function solution(cipher, code) {
    let answer = '';
    
    [...cipher].map((alp, idx) => {
        if ((idx + 1) % code === 0) answer += alp;
    })
    
    return answer;
}