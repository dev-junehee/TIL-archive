function solution(my_string) {
  let newStr = my_string.replace(/[a-z]/g, "");
  return [...newStr].map((v) => v - 0).sort((a, b) => a - b);
}
