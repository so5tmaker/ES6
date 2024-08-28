function nthFibonacci(n) {
    if (n <= 1) {
        return n;
    }
    let previous = 0, current = 1;
    for (let i = 1; i < n; i++) {
        let temp = current;
        current += previous;
        previous = temp;
    }
    return current;
}

console.log(nthFibonacci(7));
