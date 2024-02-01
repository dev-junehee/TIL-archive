function solution(num, k) {
    let strNum = String(num);
    let idx = strNum.indexOf(k) + 1;
    return idx > 0 ? idx : -1;
}
