const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

_reader.on('close', solve);

function readLine() {
    return _inputLines[_curLine++];
}

function solve() {
    const [interns, k] = readLine().split(' ').map(BigInt);

    const getCommits = (n) => {
        if (n < 2) return 1n;

        let a = 1n;
        let b = 1n;

        for (let i = 2n; i <= n; i++) {
            // [b, a] = [a, b];
            // b = (a + b) % BigInt(10) ** k;
            [a, b] = [b, (a + b) % (BigInt(10) ** k)];
        }

        return b;  // Возвращаем число Фибоначчи
    }

    const fibResult = getCommits(interns);
    console.log((fibResult % BigInt(10) ** k).toString());  // выводим остаток от деления на 10^k 
}

/*
Для решения задачи чисел Фибоначчи без рекурсии, вы можете использовать итеративный подход, где значения будут накапливаться через переменные. 

Здесь используется модульное арифметическое вычисление для чисел Фибоначчи, что позволяет поддерживать их в пределах значений, управляемых BigInt. 
Это важно для предотвращения проблем с переполнением при работе с большими числами.

Объяснение:

    1.	Инициализация a и b: Начинаем с a = 0n и b = 1n, что соответствует начальным значениям чисел Фибоначчи.
    2.	Цикл:
    •	Используем деструктуризацию для обновления значений a и b.
    •	Сохраняем остаток от деления на 10^k в каждом шаге, чтобы избежать переполнения.
    3.	Вывод:
    •	Печатаем результат напрямую, так как он уже находится в пределах 10^k.

Такой подход эффективен для вычисления чисел Фибоначчи и управления их размерами, предотвращая переполнение и сохраняя необходимую точность.
*/
