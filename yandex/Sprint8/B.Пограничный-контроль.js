const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const inputLines = [];
let curLine = 0;

const Answers = {
    OK: 'OK',
    FAIL: 'FAIL',
};

const { OK, FAIL } = Answers;

// Чтение строк из стандартного ввода
reader.on('line', line => inputLines.push(line));
reader.on('close', solve);

// Функция для чтения строк из входных данных
const readString = () => inputLines[curLine++];

function solve() {
    // Чтение двух строк для сравнения
    let s = readString();
    let t = readString();

    // Если строки равны, сразу выводим OK
    if (s === t) {
        console.log(OK);
        return;
    }

    const lenS = s.length;
    const lenT = t.length;

    // Если разница в длине строк больше 1, выводим FAIL
    if (Math.abs(lenS - lenT) > 1) {
        console.log(FAIL);
        return;
    }

    // Инициализация указателей для обеих строк и счетчика различий
    let i = 0, j = 0;
    let diffCount = 0;

    // Проходим по обеим строкам до конца
    while (i < lenS && j < lenT) {
        // Если текущие символы не совпадают
        if (s[i] !== t[j]) {
            // Увеличиваем счетчик различий
            diffCount++;
            // Если количество различий больше 1, выводим FAIL
            if (diffCount > 1) {
                console.log(FAIL);
                return;
            }

            // Если длина первой строки больше, продвигаем указатель первой строки
            if (lenS > lenT) {
                i++;
                // Если длина второй строки больше, продвигаем указатель второй строки
            } else if (lenS < lenT) {
                j++;
                // Если длины строк равны, продвигаем оба указателя
            } else {
                i++;
                j++;
            }
        } else {
            // Если текущие символы совпадают, продвигаем оба указателя
            i++;
            j++;
        }
    }

    // Если количество различий не превышает 1, выводим OK
    console.log(OK);
}