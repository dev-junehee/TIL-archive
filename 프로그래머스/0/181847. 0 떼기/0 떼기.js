function solution(n_str) {
    let noZero = n_str.split('').findIndex(num => num !== '0');
    return n_str.slice(noZero);
}