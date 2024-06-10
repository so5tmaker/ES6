const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const inputLines = [];
let curLine = 0;

reader.on('line', line => inputLines.push(line));
reader.on('close', solve);

const readNumber = () => Number(inputLines[curLine++]);
const readNumbers = () => inputLines[curLine++].split(' ').map(Number);

function solve() {
    const n = readNumber();
    const a = readNumbers();
    const m = readNumber();
    const b = readNumbers();

    const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

    // Заполняем матрицу dp согласно алгоритму
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Восстановление ответа
    let result = [];
    const aI = [];
    const bI = [];
    let i = n, j = m;
    while (dp[i][j] !== 0) {
        if (a[i - 1] === b[j - 1]) {
            result.unshift(a[i - 1]);
            aI.unshift(i);
            bI.unshift(j);
            i--;
            j--;
        } else if (dp[i][j] === dp[i - 1][j]) {
            i--;
        } else {
            j--;
        }
    }
    console.log(result.length);
    if (aI.length) console.log(aI.join(' '));
    if (bI.length) console.log(bI.join(' '));
}

