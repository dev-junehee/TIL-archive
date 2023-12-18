let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 지방의 수 n = 5
// 각 지방의 예산 요청 arr = [ 70, 80, 30, 40, 100 ]
// 예산 총합 m = 450
let n = Number(input[0]);
let arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let m = Number(input[2]);

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b)); // end = 100

let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2); // mid = 50, 75, 88, 94, 99, 100
  let total = 0;

  // arr = [ 70, 80, 30, 40, 100 ]
  // total = 70 + 80 + 30 + 40 + 100 = 320
  for (let x of arr) {
    total += Math.min(mid, x);
  }
  // m = 450
  if (total <= m) {
    result = mid; // result = 100
    start = mid + 1; // start = 101
  } else {
    end = mid - 1; // end = 100
  }
}

console.log(result);