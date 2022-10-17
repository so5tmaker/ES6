const factorial = (i) => i === 1 ? i : factorial(i - 1) * i;

console.log(factorial(7));