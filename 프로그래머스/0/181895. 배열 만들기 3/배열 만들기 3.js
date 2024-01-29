// function solution(arr, intervals) {
//     let answer = [];
    
//     const [[a1, b1], [a2, b2]] = intervals;
    
//     for (let i = a1; i <= b1; i++) answer.push(arr[i]);
//     for (let j = a2; j <= b2; j++) answer.push(arr[j]);
    
//     return answer;
// }

function solution(arr, intervals) {
    const [[a1, b1], [a2, b2]] = intervals;
    return [...arr.slice(a1, b1 + 1), ...arr.slice(a2, b2 + 1)];
}