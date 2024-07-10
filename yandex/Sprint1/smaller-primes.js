const isPrime = require('./prime-number');

function getSmallerPrimes(n) {
    const smallerPrimes = [];

    for (let num = 2; num <= n; num++)
        if (isPrime(num)) smallerPrimes.push(num);

    return smallerPrimes;
}

console.log(getSmallerPrimes(11));