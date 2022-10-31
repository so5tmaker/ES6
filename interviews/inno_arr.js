function ArrayChallenge(strArr) {
    let newStr = '';
    for (let i = 0; i < strArr[0].length; i++) {
        const isEqSymbol = strArr[0][i] === strArr[1][i];
        newStr += isEqSymbol && strArr[0][i] === '1' ? '1' : '0';
    }
    return newStr;
}

console.log(ArrayChallenge(['10100', '11100']))

function ArrayChallenge2(arr) {
    arr.sort((a, b) => a - b);
    let results = [];
    let allResults = [];
    let nums = [];
    let large = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] <= 1) {
            results.push(arr[i]);
        } else {
            if (results.length > 0) {
                {
                    allResults.push(results.length);
                    results = [];

                }
            }
        }
    }
    if (results.length > 0) {
        allResults.push(results.length);
        results = [];
    }
    return allResults;
}
console.log(ArrayChallenge2([6, 7, 3, 1, 100, 101, 102, 6, 12]));