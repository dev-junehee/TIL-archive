function solution(num_list) {
    var answer = [];
    
    let new_list = num_list.sort((a, b) => a - b);
    
    for (let i = 5; i < new_list.length; i++) {
        answer.push(new_list[i])
    }
    
    return answer;
}