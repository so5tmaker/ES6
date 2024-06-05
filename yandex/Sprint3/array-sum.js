const solve = (arr) => {
    if (arr.length === 0) return 0;

    if (arr.length === 1) return arr[0];


    const getSum = (sum, i) => {
        if (i === arr.length) return sum;

        return sum + getSum(arr[i], i + 1);
    }

    return getSum(arr[0], 1);
}

console.log(solve([9, 9, 9, 9, 9, 9]));