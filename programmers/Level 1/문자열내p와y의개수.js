function solution(s) {
  let str = s.toLowerCase();

  let p = 0;
  let y = 0;

  for (i of str) {
    if (i === "p") p++;
    else if (i === "y") y++;
  }

  return p === y ? true : false;
}
