function ArrayChallenge(strArr) {
    let newStr = '';
    for (let i = 0; i < strArr[0].length; i++) {
        const isEqSymbol = strArr[0][i] === strArr[1][i];
        newStr += isEqSymbol && strArr[0][i] === '1' ? '1' : '0';
    }
    return newStr;
}

console.log(ArrayChallenge(['10100', '11100']))