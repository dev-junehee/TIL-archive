let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const [a, b] = input;
const [b_1, b_2, b_3] = b.split("");

console.log(Number(a) * Number(b_3));
console.log(Number(a) * Number(b_2));
console.log(Number(a) * Number(b_1));
console.log(Number(a) * Number(b));
