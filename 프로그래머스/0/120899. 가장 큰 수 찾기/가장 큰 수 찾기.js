// function solution(array) {
//     let max = Math.max(...array);
//     return [max, array.findIndex(num => num === max)];
// }

function solution(array) {
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
}