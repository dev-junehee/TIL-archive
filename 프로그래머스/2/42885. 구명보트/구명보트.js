function solution(people, limit) {
    people.sort((a, b) => a - b);
    
    let boat = 0;
    
    let front = 0;
    let back = people.length - 1;
    
    while (front <= back) {
        let sum = people[front] + people[back];
        
        if (sum <= limit) {
            boat += 1;
            front++;
            back--;
        } else {
            boat += 1;
            back--;
        }
    }
     
    return boat;
}