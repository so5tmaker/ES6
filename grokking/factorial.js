const factorial = x => x === 1 ? x : factorial(x - 1) * x;

console.log(factorial(7));