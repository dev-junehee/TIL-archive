function solution(a, b, c) {
    let count = new Set([a, b, c]).size;
    
    switch (count) {
        case 1:
            return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
            break;
        case 2:
            return (a + b + c) * (a ** 2 + b ** 2 + c ** 2)
            break;
        case 3:
            return a + b + c;
            break;
    }
}