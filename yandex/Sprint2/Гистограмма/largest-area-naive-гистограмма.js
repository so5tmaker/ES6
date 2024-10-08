function largestRectangleArea(heights) {
    let maxArea = 0;

    for (let k = 0; k < heights.length; k++) {
        let minHeight = Infinity;
        for (let x = k; x < heights.length; x++) {
            minHeight = Math.min(minHeight, heights[x]);
            maxArea = Math.max(maxArea, minHeight * (x - k + 1));
        }
    }

    return maxArea;
}

// Пример использования функции с массивом высот гистограммы
const histogramHeights = [2, 7, 6, 9, 7, 5, 7, 3, 5];
const largestArea = largestRectangleArea(histogramHeights);
console.log(largestArea); // Выведет максимальную площадь прямоугольника

/*
Этот код решает задачу поиска максимальной площади прямоугольника в гистограмме. Он реализует наивное решение, 
перебирая все возможные левые и правые границы прямоугольника и вычисляя минимальную высоту на каждом отрезке.

Как работает код:

    1.	Внешний цикл  k  перебирает все возможные позиции для левой границы прямоугольника.
    2.	Внутренний цикл  x  проходит справа от  k  и на каждом шаге:
    •	Находит минимальную высоту столбца от  k  до  x .
    •	Вычисляет площадь прямоугольника с этой высотой и шириной, равной  x - k + 1.
    •	Обновляет максимальную площадь.

Пример:

Для массива высот [2, 7, 6, 9, 7, 5, 7, 3, 5]:

    •	Внешний цикл начинается с  k = 0 , и затем перебирает все возможные правые границы, начиная от индекса 0 до конца массива.
    •	Для каждого отрезка вычисляется минимальная высота, затем рассчитывается площадь, и если она больше текущего максимума, обновляется переменная maxArea.

Вывод:

Для массива [2, 7, 6, 9, 7, 5, 7, 3, 5] функция должна правильно вывести максимальную площадь прямоугольника, которая равна 30, отрезок с индексами от 1 до 6.

Оптимизация:

Это решение имеет сложность  O(n^2) , так как оно использует два вложенных цикла для перебора всех возможных отрезков.

Для оптимизации можно использовать стек, что снизит сложность до  O(n) , но этот код корректно решает задачу для небольших массивов.
*/