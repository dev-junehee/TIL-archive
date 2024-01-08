function solution(my_string) {
    return my_string.includes(' ') ? my_string.split(' ') : [my_string];
}