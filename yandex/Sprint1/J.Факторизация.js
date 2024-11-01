/*
Сложность разложения на простые множители с использованием этого алгоритма складывается из двух частей:

 1. Сложность решета Эратосфена для нахождения всех простых чисел до n: это O(n log log n). 
 Это один из самых эффективных способов получения простых чисел до заданного предела.

 2. Сложность самого разложения на множители, с использованием найденных простых чисел: 
 это примерно O(sqrt(n)) для числа n. Поскольку мы делим на каждый простой множитель, 
 начиная с наименьших, мы примерно доходим до sqrt(n) для полного разложения числа.

Итоговая сложность:
Совокупная сложность алгоритма составит O(n log log n + sqrt(n)). Однако стоит отметить,
что O(n log log n) в решете работает только при одном вызове для массива простых чисел, 
и если мы храним список простых чисел для повторного использования, то фактическая сложность снижается до O(sqrt(n)).
*/

const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const LINE = 'line';
const CLOSE = 'close';

const inputLines = [];
let curLine = 0;

// чтение строк из стандартного ввода
reader.on(LINE, line => inputLines.push(line));
reader.on(CLOSE, solve);

// функция для чтения строк из входных данных
const readNumber = () => Number(inputLines[curLine++]);

function eratosthenesEffective(n) {
    const numbers = new Array(n + 1).fill(true);

    numbers[0] = numbers[1] = false;

    for (let num = 2; num * num <= n; num++) {
        if (numbers[num]) {
            for (let j = num * num; j <= n; j += num) {
                numbers[j] = false;
            }
        }
    }

    return numbers;
}

function solve() {
    let n = readNumber();

    const primes = eratosthenesEffective(n);
    const primeNumbers = primes.map((isPrime, i) => isPrime ? i : isPrime).filter(p => p);
    const factors = [];

    // set an empty array of factors
    // assign n as an initial value of remaining variable
    // iterate prime numbers
    // check while remaining has not remainder from division: remaining % prime
    // add prime in factors array and divide remaining by prime
    // after while check that remaining equals 1, if yes break

    console.log(factors);
}