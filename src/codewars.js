function binaryGap(N) {
    var maxGap = 0;
    var curMaxGap = 0;
    var binStr = N.toString(2);
    console.log(binStr);
    var startIndexFromEnd = binStr.length - 1;
    for (startIndexFromEnd; startIndexFromEnd >= 0; startIndexFromEnd--) {
        if (binStr.charAt(startIndexFromEnd) != '0') {
            break;
        }
    }
    for (var i = startIndexFromEnd - 1; i >= 0; i--) {
        if (binStr.charAt(i) == '0') {
            curMaxGap = curMaxGap + 1;
        } else {
            if (curMaxGap > maxGap) {
                maxGap = curMaxGap;
            }
            curMaxGap = 0;
        }
    }
    return maxGap;
}

console.log(binaryGap(647));