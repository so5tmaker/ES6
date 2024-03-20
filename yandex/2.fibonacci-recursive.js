function nthFibonacci(n) {
    const SENTINEL = -1;
    // Array for memoization
    const numbers = new Array(n + 1).fill(SENTINEL);

    function nthFibonacci_(n) {
        if (n <= 1) {
            return n;
        } else if (numbers[n] !== SENTINEL) {
            return numbers[n];
        } else {
            const result = nthFibonacci_(n - 1) + nthFibonacci_(n - 2);
            numbers[n] = result;
            return result;
        }
    }

    return nthFibonacci_(n);
}

console.log(nthFibonacci(6));