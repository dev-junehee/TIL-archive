function solution(answers) {
    let supo1 = [1, 2, 3, 4, 5];
    let supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let supo_answers = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        if (supo1[i % supo1.length] === answers[i]) supo_answers[0]++;
        if (supo2[i % supo2.length] === answers[i]) supo_answers[1]++;
        if (supo3[i % supo3.length] === answers[i]) supo_answers[2]++;
    }
    
    let best = Math.max(...supo_answers);
    let winner = [];
    
    if (supo_answers[0] === best) winner.push(1);
    if (supo_answers[1] === best) winner.push(2);
    if (supo_answers[2] === best) winner.push(3);
    
    return winner;
}