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

function sumAll1(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
        sumBetween += i;
    }
    return sumBetween;
}

const sumAll2 = arr => {
    // Buckle up everything to one!
    const startNum = arr[0];
    const endNum = arr[1];

    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;

    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
};

function sumAll3(arr) {
    let sumBetween = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sumBetween += i;
    }
    return sumBetween;
}

function sumAll4(arr) {
    const [first, last] = [...arr].sort((a, b) => a - b);
    return first !== last
        ? first + sumAll([first + 1, last])
        : first;
}

console.log(sumAll([10, 5]));
console.log(sumAll1([10, 5]));
console.log(sumAll2([10, 5]));
console.log(sumAll3([10, 5]));
console.log(sumAll4([10, 5]));
