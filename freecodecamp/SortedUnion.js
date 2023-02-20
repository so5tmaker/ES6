// 
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
// uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].
// uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

const uniteUnique = (arr, ...rest) => {
    let newArray = [...new Set(arr)];
    const getUnique = (array, newArray) => {
        const newUnique = [];
        for (let i = 0; i < array.length; i++) {
            if (!newArray.includes(array[i])) { newUnique.push(array[i]) }
        }
        return newUnique;
    }
    for (let i = 0; i < rest.length; i++) {
        const unique = getUnique(rest[i], newArray);
        newArray = [...newArray, ...unique];
    }
    return newArray;
}


console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // should return [1, 3, 2, 5, 4].
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // should return [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // should return [1, 2, 3, 5, 4, 6, 7, 8].
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6])); // should return [1, 3, 2, 5, 4, 6].
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])); // should return [1, 3, 2, 5, 4].

// Problem Explanation
// The program has to return a new array of unique values from two original arrays in the order they show up.So there is not sorting required, and there shouldn’t be any duplicates.

// Relevant Links

// JS Arguments 3.5k
// Hints
// Hint 1
// Since you have no idea how many parameters were passed, it would be best to loop through the arguments before looping through the arrays.

//     Hint 2
// It isn’t necessary to use loops.You can use functions such as map(), reduce() or others if you want.

//     Hint 3
// You will have to check if the current value is already on the array to be returned for every value.

//     Solutions
// Solution 1(Click to Show / Hide)
function uniteUnique(arr1, arr2, arr3) {
    // Creates an empty array to store our final result.
    const finalArray = [];

    // Loop through the arguments object to truly make the program work with two or more arrays
    // instead of 3.
    for (let i = 0; i < arguments.length; i++) {
        const arrayArguments = arguments[i];

        // Loops through the array at hand
        for (let j = 0; j < arrayArguments.length; j++) {
            let indexValue = arrayArguments[j];

            // Checks if the value is already on the final array.
            if (finalArray.indexOf(indexValue) < 0) {
                finalArray.push(indexValue);
            }
        }
    }

    return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// Code Explanation

// Create empty array finalResult to store the final result.
// Loop through the arguments object in the outer loop and store it in arrayArguments.
// The inner loop is used to loop through individual array elements.
// If the element doesn’t already exist in finalArray, add it.
// Return finalArray.
// Relevant Links

// JS For Loops Explained 90
// array.length 29
// JS String Prototype IndexOf 153
// JS Array Prototype Push 61
// Solution 2(Click to Show / Hide)
function uniteUnique(arr) {
    const args = [...arguments];
    const result = [];
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
            if (!result.includes(args[i][j])) {
                result.push(args[i][j]);
            }
        }
    }
    return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// Solution 3(Click to Show / Hide)
function uniteUnique(...arr) {
    return [...new Set(arr.flat())];
}

// Or as an arrow function
const uniteUnique = (...arr) => [...new Set(arr.flat())];
// Relevant Links

// Array.prototype.flat 330
// Arguments 262
// Set 1.5k
// Solution 4(Click to Show / Hide)
function uniteUnique() {
    return [...arguments]
        .flat()
        .filter((item, ind, arr) => arr.indexOf(item) === ind);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);