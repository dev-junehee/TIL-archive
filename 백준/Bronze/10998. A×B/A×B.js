let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const A = ~~input[0].split(" ")[0];
const B = ~~input[0].split(" ")[1];

console.log(A * B);
