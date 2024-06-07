const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const inputLines = [];
reader.on('line', line => inputLines.push(line));
reader.on('close', solve);

function solve() {
    const [n, m] = inputLines[0].split(' ').map(Number);
    const points = inputLines.slice(1, n + 1).map(line => line.split('').map(Number));

    const dp = Array.from({ length: n }, () => Array(m).fill(0));

    // Инициализируем начальную точку
    dp[n - 1][0] = points[n - 1][0];

    // Заполняем первую колонку (движение только вверх)
    for (let i = n - 2; i >= 0; i--) {
        dp[i][0] = dp[i + 1][0] + points[i][0];
    }

    // Заполняем первую строку (движение только вправо)
    for (let j = 1; j < m; j++) {
        dp[n - 1][j] = dp[n - 1][j - 1] + points[n - 1][j];
    }

    // Заполнение dp-матрицы для всех остальных ячеек
    for (let i = n - 2; i >= 0; i--) {
        for (let j = 1; j < m; j++) {
            dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]) + points[i][j];
        }
    }

    // Ответ в правой верхней клетке
    console.log(dp[0][m - 1]);
}