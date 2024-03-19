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

function movingAverageTwoPointers(timeseries, K) {
    let result = []; // Empty array.
    // Calculate the first value honestly and save the result.
    let current_sum = timeseries.slice(0, K).reduce((sum, val) => sum + val, 0);
    result.push(current_sum / K); // Add to result.
    for (let i = 0; i < timeseries.length - K; i++) {
        current_sum -= timeseries[i];
        current_sum += timeseries[i + K];
        const current_avg = current_sum / K;
        result.push(current_avg); // Add to result.
    }
    return result;
}

console.log(movingAverageTwoPointers([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 3));