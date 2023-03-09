// Drop it
// Given the array arr, iterate through and remove each element starting from the first element(the 0 index) until the
// function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

const dropElements = (arr, func) => {
    let i = 0;
    while (!func(arr[i])) {
        arr.shift();
    }
    return arr;
}

console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; }));

function dropElementsAI(arr, func) {
    let index = 0;
    while (index < arr.length && !func(arr[index])) {
        index++;
    }
    return index === arr.length ? [] : arr.slice(index);
}

console.log(dropElementsAI([1, 2, 3, 4], function (n) { return n >= 3; }));