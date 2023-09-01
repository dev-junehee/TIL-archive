function solution(hp) {
  let general = ~~(hp / 5);
  let soldier = ~~((hp % 5) / 3);
  let ergate = (hp % 5) % 3;
  return general + soldier + ergate;
}
