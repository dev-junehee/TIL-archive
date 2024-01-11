function solution(my_string, alp) {
    let answer = '';
    
    [...my_string].map(el => {
        if (el === alp) answer += el.toUpperCase();
        else answer += el;
    })
    
    return answer;
}