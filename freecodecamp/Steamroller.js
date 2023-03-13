// Steamroller

// Flatten a nested array. You must account for varying levels of nesting.

// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

// Global variables should not be used.

const steamrollArray = (arr) => {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArray.push(...steamrollArray(arr[i]));
        } else { newArray.push(arr[i]); }
    }
    return newArray;
}

console.log(steamrollArray([[["a"]], [["b"]]])) // should return ["a", "b"].
console.log(steamrollArray([1, [2], [3, [[4]]]])) // should return [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])); // should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])) // should return [1, {}, 3, 4].