/*
https://contest.yandex.ru/contest/25597/run-report/115137526/

-- ПРИНЦИП РАБОТЫ --
Алгоритм проверки последовательности неотрицательных целых чисел на возможность разбиения на две части с равными
суммами базируется на идее динамического программирования. Он начинается с проверки четности суммы всех чисел последовательности. 
Если сумма четная, то алгоритм строит булевый одномерный массив dp, где dp[j] определяет, 
можно ли получить сумму j с использованием первых i элементов последовательности.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Корректность алгоритма обеспечивается его методом заполнения массива динамического программирования dp. 
Каждый элемент этого массива содержит булево значение, указывающее на возможность получения суммы j
с использованием первых i элементов последовательности. Последовательное заполнение массива dp гарантирует 
возможность разбиения последовательности на две части с равными суммами.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Временная сложность алгоритма составляет O(N * M), где N — количество элементов последовательности,
а M — половина суммы всех элементов последовательности. Это связано с итерациями по всем элементам массива dp
и последовательности чисел.

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Пространственная сложность алгоритма составляет O(M), где M — половина суммы всех элементов последовательности.
Это связано с использованием дополнительной памяти для хранения массива динамического программирования dp,
длина которого равна M + 1.
*/

const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const Answers = {
    TRUE: 'True',
    FALSE: 'False',
};

const { TRUE, FALSE } = Answers;

const LINE = 'line';
const CLOSE = 'close';

const inputLines = [];
let curLine = 0;

// чтение строк из стандартного ввода
reader.on(LINE, line => inputLines.push(line));
reader.on(CLOSE, solve);

// функция для чтения строк из входных данных
const readNumber = () => Number(inputLines[curLine++]);
const readNumbers = () => inputLines[curLine++].split(' ').map(Number);

function solve() {
    const n = readNumber();
    const nums = readNumbers();

    const sum = nums.reduce((acc, val) => acc + val, 0);

    // если сумма нечетная, невозможно разбить на две равные части
    if (sum % 2 !== 0) { console.log(FALSE); return; }

    const target = sum / 2;
    // инициализация булевого одномерного массива
    const dp = Array(target + 1).fill(false);

    // сумма 0 всегда достижима, то есть, для данного элемента сумма выбранных элементов равна 0, ведь предыдущих значений нет 
    dp[0] = true;

    // заполнение массива dp
    for (let i = 1; i <= n; i++) {
        for (let j = target; j >= nums[i - 1]; j--) {
            // обновляем значение dp[j], чтобы указать, можно ли получить сумму j с использованием предыдущих значений массива dp
            dp[j] = dp[j] || dp[j - nums[i - 1]]; // если можно получить сумму j - nums[i - 1] с использованием предыдущих значений массива dp, то можно получить и сумму j
        }
    }

    console.log(dp[target] ? TRUE : FALSE);
}
