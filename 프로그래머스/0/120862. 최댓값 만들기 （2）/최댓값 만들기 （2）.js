function solution(numbers) {
    let sorted = [...numbers].sort((a, b) => b - a);
    let positive = sorted[0] * sorted[1];
    let negative = sorted[sorted.length - 1] * sorted[sorted.length - 2];
    
    return Math.max(positive, negative);
}