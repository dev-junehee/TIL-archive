function solution(myString, pat) {
    const regexp = new RegExp(`${pat}`, 'gi');
    return myString.match(regexp) ? 1 : 0;
}