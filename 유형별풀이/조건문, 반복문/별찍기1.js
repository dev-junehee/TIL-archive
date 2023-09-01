let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (i = 1; i <= input; i++) {
  console.log("*".repeat(i));
}
