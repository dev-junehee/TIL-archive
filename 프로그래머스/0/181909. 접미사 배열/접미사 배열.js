function solution(my_string) {
    let suffix = [];
    
    my_string = my_string.split('').reverse();
    let idx = 0;
    
    while (idx <= my_string.length) {
        suffix.push(my_string.slice(0, idx).reverse().join(''))
        idx += 1;
    }

    return suffix.filter(str => str.length > 0).sort();
}