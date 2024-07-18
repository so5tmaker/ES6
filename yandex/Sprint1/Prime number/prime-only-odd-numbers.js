const isPrime = (n) => {
    if ((n <= 1)) return 0;
    if (n === 2) return true; // 2 is the only even prime number
    if (n % 2 === 0) return false; // exclude all even numbers

    let i = 3;
    while (i * i <= n) {
        if (n % i === 0) return false;

        i += 2; // checking only odd divisors
    }

    return true;
}

console.log(isPrime(11));
console.log(isPrime(17));
console.log(isPrime(113));
console.log(isPrime(1179));
console.log(isPrime(4598));