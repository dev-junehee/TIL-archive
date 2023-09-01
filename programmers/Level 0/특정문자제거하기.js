// replaceAll() 메서드 활용
function solution(my_string, letter) {
  return my_string.replaceAll(letter, "");
}

// split() 메서드 활용
function solution(my_string, letter) {
  return my_string.split(letter).join("");
}

// filter() 메서드 활용
function solution(my_string, letter) {
  return [...my_string].filter((v) => v !== letter).join("");
}
