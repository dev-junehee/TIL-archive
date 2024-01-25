function solution(num_list) {
    let odd = [];
    let even = [];
    
    num_list.forEach((num, idx) => idx % 2 ? odd.push(num) : even.push(num));
    
    return Math.max(odd.reduce((acc, cur) => acc + cur), even.reduce((acc, cur) => acc + cur))
}