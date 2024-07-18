function isPrime(n) {
    let i = 2;

    while (i * i <= n) {
        if (n % i === 0) return false;

        i++;
    }

    return n > 1;
}

console.log(isPrime(11));
console.log(isPrime(17));
console.log(isPrime(113));
console.log(isPrime(1179));
console.log(isPrime(4598));