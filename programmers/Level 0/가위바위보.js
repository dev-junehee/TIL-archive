// if문 활용
function solution(rsp) {
  let winner = "";

  for (let i = 0; i < rsp.length; i++) {
    if (rsp[i] === "0") winner += "5";
    else if (rsp[i] === "2") winner += "0";
    else if (rsp[i] === "5") winner += "2";
  }
  return winner;
}

// switch문 활용
function solution(rsp) {
  let winner = "";

  for (let i = 0; i < rsp.length; i++) {
    switch (rsp[i]) {
      case "2":
        winner += "0";
        break;
      case "0":
        winner += "5";
        break;
      case "5":
        winner += "2";
        break;
    }
  }

  return winner;
}
