const fibonacci = n => {
    let a = 1, b = 1;

    for (let i = 3; i <= n; i++) {
        [a, b] = [b, a + b];
    }

    return b;
};

console.log(fibonacci(10)); // outputs 55

// For Loop
// The very basic solution that every developer should be able to code, when woke up in the middle of the night:
const fibonacci0 = n => {
    let a = 0, b = 1, c = n;

    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return c;
};

// In this solution, we add two numbers in a loop(a + b) and reassign each item with the next value(a with b, b with c - the result of a + b).
// Once the loop reaches the desired index, we return the calculated sum.
// You may ask, "Why do we start the loop at 2 instead of 0?".
// The answer is simple - because for n equal to 0 or 1, we can return that number, because as we already know - F(0) = 0, F(1) = 1.
// The time complexity for this solution is linear - O(n), because we run the loop from 2 to n.
// The space complexity is O(1) because it does not matter if we run fibonacci(10) or fibonacci(100), the space required remains the same.

let sequence0 = fibonacci0(10); // generates a Fibonacci sequence of length 10
console.log(sequence0); // outputs 55

// To generate a Fibonacci sequence in JavaScript, you can use a loop to iterate through
// the sequence and calculate each subsequent number.
// Here's an example function that generates a Fibonacci sequence of a specified length:

function fibonacci_(length) {
    let sequence = [0, 1];
    for (let i = 1; i < length - 1; i++) {
        sequence[i + 1] = sequence[i] + sequence[i - 1];
    }
    return sequence;
}

// In this function, the sequence array is initialized with the first two numbers in the sequence(0 and 1).
// The loop starts at index 2 and iterates up to the specified length.For each iteration, the next number
// in the sequence is calculated by adding the previous two numbers.The calculated number is then added to the sequence array.
// Finally, the sequence array is returned.

// You can call this function with a desired length argument to generate a Fibonacci sequence of that length, like so:

let sequence = fibonacci_(10); // generates a Fibonacci sequence of length 10
console.log(sequence); // outputs [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// You can generate a Fibonacci sequence in JavaScript without using an array by simply keeping track of the 
// two previous numbers and calculating the next number in the sequence.

// Here's an example function that generates a Fibonacci sequence of a specified length without using an array:

function fibonacci1(length) {
    let current = 0;
    let next = 1;
    let sequence = [];

    for (let i = 0; i < length; i++) {
        sequence.push(current);
        let temp = current;
        current = next;
        next = temp + next;
    }

    return sequence;
}

// In this function, the variables current and next are initialized to 0 and 1, respectively,
// to represent the first two numbers in the sequence.The loop runs for the specified length and for each iteration,
// the current number is added to the sequence array.The next number is calculated by adding the previous 
// two numbers(current and next) and then the current and next variables are updated to represent the next pair of numbers in the sequence.

// You can call this function with a desired length argument to generate a Fibonacci sequence of that length, like so:

let sequence1 = fibonacci1(10); // generates a Fibonacci sequence of length 10
console.log(sequence1); // outputs [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// You can also generate a Fibonacci sequence in JavaScript using recursion.
// Here's an example function that uses recursion to generate the sequence:

function fibonacci2(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci2(n - 1) + fibonacci2(n - 2);
}

// In this function, the base case is when n is less than or equal to 1. In this case, the function simply returns n.
// For values of n greater than 1, the function calls itself recursively with n - 1 and n - 2 as arguments,
// and then adds the results of these two calls to compute the nth Fibonacci number.

// You can call this function with an integer argument to generate the corresponding Fibonacci number, like so:

let fib = fibonacci2(10); // generates the 10th Fibonacci number
console.log(fib); // outputs 55

// Note that this function has an exponential time complexity, which means it can be very slow for large values of n.
// To avoid performance issues, it's usually better to use an iterative approach like the ones I described earlier.


