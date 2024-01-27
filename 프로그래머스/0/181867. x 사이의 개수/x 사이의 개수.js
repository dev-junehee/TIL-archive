// function solution(myString) {
//     return myString.split("x").map(char => char.length);
// }

function solution(myString) {
    return myString.split("x").reduce((acc, cur) => [...acc, cur.length], []);
}