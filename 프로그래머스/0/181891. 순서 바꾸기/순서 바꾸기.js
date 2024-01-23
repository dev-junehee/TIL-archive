function solution(num_list, n) {
    let before = num_list.slice(0, n);
    let after = num_list.slice(n, num_list.length);
    return after.concat(before);
}