function isPrime(n) {
    let i = 2;

    while (i * i <= n) {
        if (n % i === 0) return false;

        i++;
    }

    return n > 1;
}

function getSmallerPrimes(n) {
    const smallerPrimes = [];

    for (let num = 2; num <= n; num++)
        if (isPrime(num)) smallerPrimes.push(num);

    return smallerPrimes;
}

console.log(getSmallerPrimes(11));