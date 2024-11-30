function solution(arr) {
    arr.sort((a, b) => a - b);
    return arr.reduce((acc, cur) => getLCM(acc, cur));
}

function getLCM (num1, num2) {
    let lcm;
    
    // 둘 중의 큰 값을 임시 최소공배수로 설정
    if (num1 > num2) lcm = num1; 
    else lcm = num2;

    while (true) {
        // 최소공배수가 num1, num2로 나누어떨어지면 루프 종료
        if (lcm % num1 == 0 && lcm % num2 == 0) break;
        lcm += 1;
    }

    return lcm;
}