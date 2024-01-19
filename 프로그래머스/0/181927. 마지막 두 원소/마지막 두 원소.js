function solution(num_list) {
    const [first, second, ] = [...num_list].reverse();
    num_list.push(first > second ? first - second : first * 2);
    
    return num_list;
}