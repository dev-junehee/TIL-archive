function solution(n) {
    let origin = n.toString(2).match(/1/g).length;
    let next = n + 1;
    
    while (true) {
        let now = next.toString(2).match(/1/g).length;
        if (origin === now) return next;
        else next++;
    }
}