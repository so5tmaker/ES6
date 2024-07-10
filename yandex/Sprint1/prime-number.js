function isPrime(n) {
    if (n === 1) return false;

    let i = 2;
    while (i * i <= n) {
        if (n % i === 0) return false;

        i++;
    }

    return true;
}

module.exports = isPrime;

// console.log(isPrime(11));
// console.log(isPrime(17));
// console.log(isPrime(113));
// console.log(isPrime(1179));
// console.log(isPrime(4598));