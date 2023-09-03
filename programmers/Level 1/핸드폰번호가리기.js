function solution(phone_number) {
  let arr = Array.from(phone_number);
  let secret = arr.slice(0, -4).fill("*").join("");
  let lastNum = arr.slice(-4).join("");
  return secret + lastNum;
}
