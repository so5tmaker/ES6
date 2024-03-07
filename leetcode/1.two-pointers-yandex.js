function maxConsecutiveElements(inputStr) {
    let result = 0;
    let curLetterIdx = 0;
    while (curLetterIdx < inputStr.length) {
        let nextLetterIdx = curLetterIdx;
        while (nextLetterIdx < inputStr.length && inputStr[nextLetterIdx] == inputStr[curLetterIdx]) {
            nextLetterIdx++;
        }
        result = Math.max(result, nextLetterIdx - curLetterIdx);
        curLetterIdx = nextLetterIdx;
    }
    return result;
}

console.log(maxConsecutiveElements('success'));



