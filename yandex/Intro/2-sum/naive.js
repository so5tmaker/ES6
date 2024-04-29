function twoSum(numbers, X) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === X) {
                return [numbers[i], numbers[j]];
            }
        }
    }
    return [null, null]; // Если пара не найдена
}

// Пример использования:
const numbers = [2, 7, 11, 15];
const X = 9;
console.log(twoSum(numbers, X)); // Вывод: [2, 7]