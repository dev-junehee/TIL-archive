function solution(number) {
    let sum = [...number].reduce((acc, cur) => +acc + +cur, 0);
    return sum % 9;
}