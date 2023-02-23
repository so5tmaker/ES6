const isPrime = (n) => {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// In this function, we first check if the input n is less than or equal to 1. 
// This is because 1 and all numbers less than 1 are not considered prime.
// If n is less than or equal to 1, we immediately return false.
// Next, we use a for loop to iterate over every integer from 2 up to the square root of n.
// If n is divisible by any of these integers (i.e., the remainder of n divided by the integer is 0),
// then we immediately return false, since n is not prime.
// Otherwise, we continue checking the other integers up to the square root of n.
// If we reach the end of the loop without finding any divisors of n, then n must be prime, so we return true.
// Here is an example usage of the function:

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false