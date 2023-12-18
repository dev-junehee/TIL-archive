// 명시적 형변환
let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const A = ~~input[0].split(" ")[0];
const B = ~~input[0].split(" ")[1];

console.log(A * B);

// 구조분해할당 후 암묵적 형변환 사용
let fs = require("fs");
let input = fs.readFileSync("example1.txt").toString().split("\n");

const [A, B] = input[0].split(" ");

console.log(A * B);

