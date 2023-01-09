function sumAll(arr) {
    arr.sort((a, b) => (a - b));
    const first = arr[0] + 1;
    const last = arr[1] - 1;
    result = arr[0] + arr[1];
    for (let i = first; i <= last; i++) {
        result += i;
    }
    return result;
}

console.log(sumAll([10, 5]))