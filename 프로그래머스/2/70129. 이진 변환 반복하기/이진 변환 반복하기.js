function solution(s) {
    let convert = 0;
    let zero = 0;
    
    while (s !== '1') {
        let newS = s.replaceAll('0', '').length;
        zero += s.length - newS;
        s = newS.toString(2);
        convert += 1;
    }
    
    return [convert, zero];
}