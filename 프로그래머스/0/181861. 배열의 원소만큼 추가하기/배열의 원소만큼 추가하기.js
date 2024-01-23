function solution(arr) {
    let X = [];
    
    arr.forEach(num => {
        for (let i = 1; i <= num; i++) X.push(num)
    })
    
    return X;
}