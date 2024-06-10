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

const readNumbers = () => inputLines[curLine++].split(' ').map(Number);

function solve() {
    const [n, maxWeight] = readNumbers();
    const weights = readNumbers();
    let dp = Array(maxWeight + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        for (let j = maxWeight; j >= weights[i - 1]; j--) {
            dp[j] = Math.max(dp[j], weights[i - 1] + dp[j - weights[i - 1]]);
        }
    }

    console.log(dp[maxWeight]);
}