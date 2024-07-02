function movingAverage(timeSeries, K) {
    let result = []; // Empty array.
    // внешний выполняет ровно N − K + 1 итераций;
    for (let beginIndex = 0; beginIndex <= timeSeries.length - K; beginIndex++) {
        let endIndex = beginIndex + K;
        // Iterate over a window of width K.
        let currentSum = 0;
        /* внутренний выполняет K итераций на каждой из N − K + 1 итераций внешнего цикла N × (N − K + 1) = N × K − K^2 + K.
        Поскольку в нашем случае N сильно больше K, частью ( −K^2 + K ) в этом выражении можно пренебречь
        и считать число операций примерно равным N × K.
        */
        for (let i = beginIndex; i < endIndex; i++) {
            currentSum += timeSeries[i];
        }
        let currentAvg = currentSum / K;
        result.push(currentAvg);
    }
    return result;
}

console.log(movingAverage([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 3));

function movingAverageTwoPointers(timeSeries, K) {
    let result = []; // Empty array.
    // Calculate the first value honestly and save the result.
    let current_sum = timeSeries.slice(0, K).reduce((sum, val) => sum + val, 0);
    result.push(current_sum / K); // Add to result.
    for (let i = 0; i < timeSeries.length - K; i++) {
        current_sum -= timeSeries[i];
        current_sum += timeSeries[i + K];
        const current_avg = current_sum / K;
        result.push(current_avg); // Add to result.
    }
    return result;
}

console.log(movingAverageTwoPointers([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 3));

function slidingWindow(timeSeries, K) {
    let result = []; // Empty array.
    // Calculate the first value honestly and save the result.
    let current_sum = timeSeries.slice(0, K).reduce((sum, val) => sum + val, 0);
    result.push(current_sum / K); // Add to result.
    for (let i = K; i < timeSeries.length; i++) {
        current_sum += timeSeries[i] - timeSeries[i - K];
        const current_avg = current_sum / K;
        result.push(current_avg); // Add to result.
    }
    return result;
}

console.log(slidingWindow([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 3));