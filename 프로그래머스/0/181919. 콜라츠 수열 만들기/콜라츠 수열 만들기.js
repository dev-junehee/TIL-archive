function solution(n) {
    var answer = [n];
    while (true) {
        if (n === 1) {
            return answer;
        } else if (n % 2 === 0) {
            n /= 2;
            answer.push(n);
        } else {
            n = 3 * n + 1;
            answer.push(n);
        }
    }
    return answer;
}