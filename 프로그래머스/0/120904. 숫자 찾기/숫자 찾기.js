function solution(num, k) {
    var answer = 0;
    let strNum = String(num);
    let idx = strNum.indexOf(k) + 1;
    
    return idx > 0 ? idx : -1;
}