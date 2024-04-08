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
