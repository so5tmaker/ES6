const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const END = 'close';
const LINE = 'line';

const _inputLines = [];
let _curLine = 0;

_reader.on(LINE, line => _inputLines.push(line));

_reader.on(END, solve);

const readNumbers = () => _inputLines[_curLine++].split(' ').map(Number);

function solve() {
    const [n, k] = readNumbers();

    // Создаем массив для хранения количества способов добраться до каждой ступеньки
    const dp = new Array(n + 1).fill(0);

    // Базовый случай: до первой ступеньки можно добраться всего одним способом
    dp[1] = 1;

    // Вычисляем количество способов для каждой ступеньки от 2 до n
    for (let i = 2; i <= n; i++) {
        // Вычисляем количество способов для текущей ступеньки, суммируя количество способов для ступенек от i - k до i - 1
        for (let j = 1; j <= k; j++) {
            if (i - j >= 1) {
                dp[i] += dp[i - j];
                dp[i] %= 1000000007; // Модуль для предотвращения переполнения
            }
        }
    }

    // Возвращаем количество способов для n-ой ступеньки
    console.log(dp[n]);
}