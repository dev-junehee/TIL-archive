function solution(n) {
    return recursion(n);
}

function recursion(n, stack = {}) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (stack[n]) return stack[n];
    
    const count = recursion(n - 1, stack) + recursion(n - 2, stack);
    stack[n] = count; 
    
    return count % 1234567;
}