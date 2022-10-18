const seldom = (arr) => {
    let oldCount = 0;
    let newCount = 0;
    let currentNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (currentNum === arr[i]) {
            oldCount += 1;
        }
        if (currentNum !== arr[i]) {
            newCount += 1;
            currentNum = oldCount <= newCount ? currentNum : arr[i];
            oldCount = oldCount <= newCount ? oldCount : newCount;
        }
    }
    return currentNum;
}

console.log(seldom([20, 20, 45, 45, 45, 49, 50, 89, 89, 90]));

