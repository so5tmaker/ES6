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