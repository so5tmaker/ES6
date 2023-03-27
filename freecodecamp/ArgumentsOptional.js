// Arguments Optional
// Create a function that sums two arguments together. 
// If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3)); // should return 5, and addTogether(2)); // should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

const addTogether = (...rest) => {
    if (rest.length === 1 && typeof rest[0] === 'number') {
        return a => {
            if (typeof a === 'number') {
                return a + rest[0];
            }
        }
    }
    if (rest.length === 2 && typeof rest[0] === 'number' && typeof rest[1] === 'number') {
        return rest[0] + rest[1];

    }
}

console.log(addTogether(2, 3)); // should return 5.
console.log(addTogether(23, 30)); // should return 53.
console.log(addTogether(5)(7)); // should return 12.
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); // should return undefined.
console.log(addTogether(2, "3")); // should return undefined.
console.log(addTogether(2)([3])); // should return undefined.
console.log(addTogether("2", 3)); // should return undefined.
console.log(addTogether(5, undefined)); // should return undefined.