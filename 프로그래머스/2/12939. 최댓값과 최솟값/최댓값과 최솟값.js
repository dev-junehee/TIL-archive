function solution(s) {
    let arrS = s.split(" ");
    return `${Math.min(...arrS)} ${Math.max(...arrS)}`;
}