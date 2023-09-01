// ver.1
function solution(my_string) {
  return my_string.replace(/a|e|i|o|u/g, "");
}

// ver.2
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

// a|e|i|o|u === [aeiou]
