function isPrime0(n) {
    if (n === 1) return false;

    let i = 2;
    while (i < n) {
        if (n % i === 0) return false;

        i++;
    }

    return true;
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
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