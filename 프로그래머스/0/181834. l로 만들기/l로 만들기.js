function solution(myString) {
    return [...myString].map(char => char.charCodeAt() < "l".charCodeAt() ? "l" : char).join('') 
}