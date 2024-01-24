function solution(arr1, arr2) {
    // 양수: arr1, 음수: arr2, 0: 동일
    let length = arr1.length - arr2.length;
    let sum = (arr1.reduce((acc, cur) => acc + cur)) - (arr2.reduce((acc, cur) => acc + cur));
    
    if (length > 0) return 1;
    if (length < 0) return -1;
    if (length === 0) {
        if (sum === 0) return 0;
        if (sum > 0) return 1;
        if (sum < 0) return -1;
    };
}