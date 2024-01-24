function solution(a, b) {
    // 1: 홀수, 0: 짝수
    let A = a % 2;
    let B = b % 2;

    if (A && B) return a * a + b * b;
    if (A || B) return 2 * (a + b);
    if (!A && !B) return Math.abs(a - b);
}