let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const [a, b] = input;
const [b_1, b_2, b_3] = b.split("");

console.log(a * b_3);
console.log(a * b_2);
console.log(a * b_1);
console.log(a * b);