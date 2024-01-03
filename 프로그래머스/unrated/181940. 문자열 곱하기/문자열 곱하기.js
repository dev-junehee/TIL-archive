function solution(my_string, k) {
    let answer = '';
    let repeat = 1;
    
    while (repeat <= k) {
        answer += my_string;
        repeat += 1;
    }
    
    return answer;
}