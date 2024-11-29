function solution(n, words) {
    const usedWords = new Set();
    let previousWord = words[0];
    
    if (previousWord.length === 1) {
        return [1, 1]
    }
    usedWords.add(previousWord);

    for (let i = 1; i < words.length; i++) {
        const currentWord = words[i];
        const player = (i % n) + 1;
        const turn = Math.floor(i / n) + 1;

        if (currentWord.length === 1 || 
            usedWords.has(currentWord) || 
            currentWord[0] !== previousWord[previousWord.length - 1]) {
            return [player, turn];
        }

        usedWords.add(currentWord);
        previousWord = currentWord;
    }

    return [0, 0];
}