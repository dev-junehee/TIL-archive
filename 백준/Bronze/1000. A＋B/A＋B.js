// ~~ 사용 (시간 단축)
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = input[0].split(' ');

let A = ~~(line[0]);
let B = ~~(line[1]);

console.log(A + B);

// parseInt 사용
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [a, b] = input[0].split(" ");

const A = parseInt(a, 10);
const B = parseInt(b, 10);

console.log(A + B);
