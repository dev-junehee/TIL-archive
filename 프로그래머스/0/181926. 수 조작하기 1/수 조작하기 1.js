function solution(n, control) {
    let answer = n;
    
    for (const str of control) {
        switch (str) {
            case 'w':
                n += 1;
                break;
            case 's':
                n -= 1;
                break;
            case 'd':
                n += 10;
                break;
            case 'a':
                n -= 10;
                break;
        }    
    }
    
    return n;
}