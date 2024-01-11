function solution(num_list) {
    let mult = num_list.reduce((acc, cur) => acc * cur);
    let sum = num_list.reduce((acc, cur) => acc + cur);
    
    return mult < sum * sum ? 1 : 0;
}