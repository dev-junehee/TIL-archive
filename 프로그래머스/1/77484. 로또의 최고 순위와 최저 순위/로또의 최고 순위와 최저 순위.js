function solution(lottos, win_nums) {
    let answer = [];
    
    let yes = 0;
    let no = 0;
    let zero = 0;
    
		// 갯수: [win, lose]
    const rank = {
        "0": [6, 1],
        "1": [6, 2],
        "2": [5, 3],
        "3": [4, 4],
        "4": [3, 5],
        "5": [2, 6],
        "6": [1, 6],
    }
    
    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] !== 0) {
            if (win_nums.includes(lottos[i])) {
                yes++;
            }
            else no++;
        }
        else zero++;
    }
    
    answer.push(rank[yes + zero][0], rank[no + zero][1])
    
    return answer;
}