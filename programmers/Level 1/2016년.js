// 객체 선언
function solution(a, b) {
  const dayList = {
    0: "SUN",
    1: "MON",
    2: "TUE",
    3: "WED",
    4: "THU",
    5: "FRI",
    6: "SAT",
  };

  let date = new Date(`2016-${a}-${b}`);
  let day = date.getDay();

  return dayList[day];
}

// 배열 선언
function solution(a, b) {
  const dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  let date = new Date(`2016-${a}-${b}`);
  let day = date.getDay();

  return dayList[day];
}

// new Date(year, monthIndex, day)
function solution(a, b) {
  let date = new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
  return date;
}
