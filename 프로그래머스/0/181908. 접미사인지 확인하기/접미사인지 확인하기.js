function solution(my_string, suffix) {
    let str = my_string.split('').reverse().slice(0, suffix.length).reverse().join('');
    return str === suffix ? 1 : 0;
}