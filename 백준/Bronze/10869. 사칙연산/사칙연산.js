let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const [a, b] = input[0].split(" ");

const A = parseInt(a, 10);
const B = parseInt(b, 10);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(parseInt(A / B));
console.log(A % B);


