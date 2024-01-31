function solution(numLog) {
    let answer = '';
    
    for (let i = 0; i < numLog.length; i++) {
        let data = numLog[i] - numLog[i+1];
        
        switch (data) {
            case -1:
                answer += 'w';
                break;
            case 1:
                answer += 's';
                break
            case -10:
                answer += 'd';
                break
            case 10:
                answer += 'a';
                break
        }
    }
    
    return answer;
}