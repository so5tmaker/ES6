function twoSumWithSort(numbers, X) {
    numbers.sort((a, b) => a - b); // Сортируем исходный массив

    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const currentSum = numbers[left] + numbers[right];
        if (currentSum === X) {
            return [numbers[left], numbers[right]];
        } else if (currentSum < X) {
            left++;
        } else {
            right--;
        }
    }

    return [null, null]; // Если ничего не найдено
}

// Пример использования:
const numbers = [2, 7, 11, 15];
const X = 9;
console.log(twoSumWithSort(numbers, X)); // Вывод: [2, 7]