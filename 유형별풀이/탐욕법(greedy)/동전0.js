let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = input[0].split(" ");

let A = ~~line[0];
let B = ~~line[1];

console.log(A + B);
