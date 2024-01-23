function solution(num_list) {
    let idx = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] < 0) return idx;
        idx++;
    }
    
    return idx === num_list.length ? -1 : idx;
}