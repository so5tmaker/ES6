const fs = require('fs');
const path = require('path');

function buildMatryoshka(size, n) {
    if (n >= 1) {
        console.log(`Создаём низ матрёшки размера ${size}.`);
        buildMatryoshka(size - 1, n - 1);
        console.log(`Создаём верх матрешки размера ${size}.`);
    }

    return;
}

buildMatryoshka(4, 3)

function as_binary_string(n) {
    if (n < 0) {
        return "-" + as_binary_string(-n);
    }
    let last_digit = n % 2;
    return as_binary_string(Math.floor(n / 2)) + last_digit.toString();
}

as_binary_string(12);