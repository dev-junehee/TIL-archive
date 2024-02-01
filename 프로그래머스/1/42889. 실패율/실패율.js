function solution(N, stages) {
    let answer = [];
    let total = stages.length;
    
    for (let i = 1; i <= N; i++) {
        let player = stages.filter(n => n === i).length;
        let failure = player / total;
        answer.push([i, failure]);
        total -= player;
    }
    
    answer.sort((a, b) => b[1] - a[1]);
    
    return answer.map(a => a[0]);
}