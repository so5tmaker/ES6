// READ THE INSTRUCTIONS CAREFULLY!!!
// AND WRITE MAIN POINTS DOWN IN THE COPYBOOK USING PENCIL!!!

// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both,
// as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is 
// also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
    arr.sort((a, b) => a - b);
    const nums = [];
    const multiples = [];
    for (let i = arr[1]; i <= arr[0]; i--) {
        nums.push(i);
    }
    for (let i = 1; i < nums.length; i++) {
        const gcd = getDivisor(lcm, nums[i]);
        lcm = (lcm * nums[i]) / gcd;
    }
    // get the greatest common divisor
    const getDivisor = (a, b) => {
        if (b === 0) {
            return a;
        } else {
            return getDivisor(a, a % b);
        }
    }
    let lcm = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const gcd = getDivisor(lcm, nums[i]);
        lcm = (lcm * nums[i]) / gcd;
    }

    return lcm;
}

console.log(smallestCommons([1, 5])) // should return a number.
console.log(smallestCommons([1, 5])) // should return 60.
console.log(smallestCommons([5, 1])) // should return 60.
console.log(smallestCommons([2, 10])) // should return 2520.
console.log(smallestCommons([1, 13])) // should return 360360.
console.log(smallestCommons([23, 18])) // should return 6056820.

// Problem Explanation
// The smallest common multiple between two numbers is the smallest number that both numbers can divide into evenly.
// This concept can be extended to more than two numbers as well.

// We can first start with finding the smallest common multiple between two numbers.
// Naively, we can start writing out multiple of each number until we write a multiple that exists from both numbers.

// An example would be the numbers 3 and 4. The multiples of 3 are 3, 6, 9, 12, 15, 18, ... 
// and the multiples of 4 are 4, 8, 12, 16, 20, .... 
// The first smallest number we run into in both lists is 12 so this is the smallest common multiple between 3 and 4.

// An faster approach is to check all multiples of 4 to see if they are also multiples of 3,
// by checking the remainder when we divide the multiple of 4 by 3.

// Be careful - do not forget the keyword range.If we are given[1, 5], then we have to check for 
// the smallest common multiple for all the numbers[1, 2, 3, 4, 5], which is the smallest number that is evenly divisible by all of them.

// Solution 1
function smallestCommons1(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;
    // Largest possible value for SCM
    let upperBound = 1;
    for (let i = min; i <= max; i++) {
        upperBound *= i;
    }
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
        // Check if every value in range divides 'multiple'
        let divisorCount = 0;
        for (let i = min; i <= max; i++) {
            // Count divisors
            if (multiple % i === 0) {
                divisorCount += 1;
            }
        }
        if (divisorCount === numberDivisors) {
            return multiple;
        }
    }
}

console.log(smallestCommons1([1, 5])) // should return a number.
console.log(smallestCommons1([1, 5])) // should return 60.
console.log(smallestCommons1([5, 1])) // should return 60.
console.log(smallestCommons1([2, 10])) // should return 2520.
console.log(smallestCommons1([1, 13])) // should return 360360.
console.log(smallestCommons1([23, 18])) // should return 6056820.