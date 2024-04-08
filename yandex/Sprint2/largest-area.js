function largestRectangleArea(heights) {
    let maxArea = 0;
    const stack = [];
    const left = new Array(heights.length);
    const right = new Array(heights.length);

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
        stack.push(i);
    }

    // Очистим стек для использования его при поиске правых границ
    stack.length = 0;

    for (let i = heights.length - 1; i >= 0; i--) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        right[i] = stack.length === 0 ? heights.length : stack[stack.length - 1];
        stack.push(i);
    }

    for (let i = 0; i < heights.length; i++) {
        maxArea = Math.max(maxArea, heights[i] * (right[i] - left[i] - 1));
    }

    return maxArea;
}

// Итого получаем массив 
// left = [−1, 0, 0, 2, 2, 0, 5, 0, 7];
// Приведём аналогичный массив правых границ:
// right = [9, 2, 5, 4, 5, 7, 7, 9, 9];

// Пример использования функции с массивом высот гистограммы
const histogramHeights = [2, 7, 6, 9, 7, 5, 7, 3, 5];
const largestArea = largestRectangleArea(histogramHeights);
console.log(largestArea); // Выведет максимальную площадь прямоугольника
