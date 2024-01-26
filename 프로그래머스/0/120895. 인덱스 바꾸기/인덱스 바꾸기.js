function solution(str, num1, num2) {
    let my_str = str.split('')
    
    my_str.splice(num1, 1, str[num2]);
    my_str.splice(num2, 1, str[num1]);
    
    return my_str.join('');
}