let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const score = parseInt(input[0], 10);

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}
