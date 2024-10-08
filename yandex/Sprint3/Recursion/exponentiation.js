function exponentiation(num, power) { // возведение в степень
    if (power === 1) return num;

    return exponentiation(num, power - 1) * num;
}

console.log(exponentiation(2, 5)); 