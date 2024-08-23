const f = (n) => {
    if (n <= 1) return 1;

    return n * f(n - 1);
}

console.log(f(2));

function factorial(n) {
    let accumulator = 1;
    let i = n;
    while (i > 1) {
        accumulator *= i;
        i -= 1;
    }
    return accumulator;
}