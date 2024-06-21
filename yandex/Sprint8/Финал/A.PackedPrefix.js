
/*
https://contest.yandex.ru/contest/26133/run-report/115414149/

-- ПРИНЦИП РАБОТЫ --
Алгоритм поиска наибольшего общего префикса сначала рекурсивно распаковывает строки.
Каждая строка обрабатывается с помощью функции распаковки, которая рекурсивно извлекает 
все вложенные подстроки. Отслеживаеn длину общего префикса, чтобы избежать частого использования slice. 
Сравнивает строки по символам и укорачиваем длину префикса (prefixLength), 
если символы не совпадают и единожды обрезаем строку в конце.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Корректность алгоритма обеспечивается правильной рекурсивной распаковкой строк.
Затем происходит последовательный поиск префикса в каждой из них,
что гарантирует нахождение наибольшего общего префикса среди всех строк.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Временная сложность алгоритма в лучшем случае составляет O(N * M), где N — количество строк в словаре, 
а M — длина запакованной строки, при условии, что строки не имеют вложенных структур. 

В худшем случае, когда строки содержат вложенные структуры, временная сложность составляет O(N * T), 
где N — количество строк в словаре, а T — максимальная длина распакованной строки. Длина T в свою очередь 
может быть экспоненциальной по отношению к M, то есть T = O(K ^ (M/4)), где K — коэффициент повтора строки (максимум 9), 
а M — длина запакованной строки. 

Таким образом, общая временная сложность алгоритма в худшем случае составляет O(N * K ^ (M/4)) ~ O(N * K ^ M) или O(N * T).

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Пространственная сложность алгоритма составляет O(N * L), где N — количество строк,
а L — длина самой длинной распакованной строки. Это связано с использованием дополнительной 
памяти для хранения массива распакованных строк.
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

// Функция для чтения числа из входных данных
const readNumber = () => Number(inputLines[curLine++]);

// Проверка, является ли символ цифрой
const isDigit = (char) => char >= '0' && char <= '9';


// Основная функция для распаковки строки
const unpackString = (str) => {
    let i = 0;

    // Рекурсивная функция для распаковки строки
    const unpackSegment = () => {
        let currentStr = ''; // переменная для накопления распакованного сегмента строки

        while (i < str.length && str[i] !== ']') {
            if (isDigit(str[i])) { // является ли текущий символ цифрой
                let num = 0;

                while (isDigit(str[i])) {
                    num = num * 10 + (str[i] - '0'); // накапливается число num
                    i++;
                }

                i++; // пропустить '['

                const unpackedSegment = unpackSegment();
                // повторить строку num раз
                currentStr += unpackedSegment.repeat(num);
            } else { // текущий символ строка
                currentStr += str[i];
                i++;
            }
        }
        i++; // пропустить ']'

        return currentStr;
    };

    return unpackSegment();
};

// Функция для нахождения наибольшего общего префикса среди строк
const findLongestCommonPrefix = (n) => {
    let prefix = '',
        prefixLength = 0; // Отслеживаем длину общего префикса, чтобы избежать частого использования slice

    for (let i = 0; i < n; i++) {
        // Распаковываем строки одна за другой
        const packedString = inputLines[curLine++];
        const unpackedString = unpackString(packedString);

        if (i === 0) { prefix = unpackedString; prefixLength = prefix.length; }
        else {
            let j = 0;
            const minLength = Math.min(prefixLength, unpackedString.length);

            while (j < minLength & prefix[j] === unpackedString[j]) j++;
            // Сравниваем строки по символам и укорачиваем prefixLen, если символы не совпадают
            prefixLength = j;

            if (prefixLength === 0) break;
        }

    }

    // единожды обрезаем строку
    console.log(prefix.slice(0, prefixLength));
};

function solve() {
    const n = readNumber();

    findLongestCommonPrefix(n);
}