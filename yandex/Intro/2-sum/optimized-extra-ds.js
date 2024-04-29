function twoSumExtraDS(numbers, X) {
    const previous = new Set();

    for (const A of numbers) {
        const Y = X - A;
        if (previous.has(Y)) {
            return [A, Y];
        } else {
            previous.add(A);
        }
    }

    return [null, null]; // Если ничего не найдено
}

// Пример использования:
const numbers = [2, 7, 11, 15];
const X = 9;
console.log(twoSumExtraDS(numbers, X)); // Вывод: [2, 7]
