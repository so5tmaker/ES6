function movingAverage(timeseries, K) {
    let result = []; // Empty array.
    for (let beginIndex = 0; beginIndex <= timeseries.length - K; beginIndex++) {
        let endIndex = beginIndex + K;
        // Iterate over a window of width K.
        let currentSum = 0;
        for (let i = beginIndex; i < endIndex; i++) {
            currentSum += timeseries[i];
        }
        let currentAvg = currentSum / K;
        result.push(currentAvg);
    }
    return result;
}

console.log(movingAverage([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 3));