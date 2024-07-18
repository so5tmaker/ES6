// https://youtu.be/s8zUK5jmXA4?si=xOtFjukc3rvTwN2y 

function getPrimes(num) {
    const sieve = [];
    const primes = [];

    for (let i = 2; i <= num; i++) {
        if (!sieve[i]) {
            primes.push(i);
            for (let j = i * i; j < num; j += i) {
                sieve[j] = True;
            }
        }
    }

    return primes;
}

console.log(getPrimes(120));