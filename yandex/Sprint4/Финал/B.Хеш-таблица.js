/*
https://contest.yandex.ru/contest/24414/run-report/113336279/

– ПРИНЦИП РАБОТЫ –
Эта реализация хэш-таблицы хранит базу данных с зарплатами сотрудников по уникальным ключам.
В таблицу можно добавлять зарплаты, изменять их и удалять. Совпадения уникальных ключей, 
коллизии, то есть ситуации, когда нескольким ключам соответствует один и тот же хеш, 
разрешаются с использованием метода цепочек, что позволяет эффективно управлять коллизиями и 
сохранять целостность данных.

– ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ –
В данной реализации метода цепочек вместо связных списков используются обычные массивы 
для хранения пар ключ-значение внутри каждой корзины (бакета). Это сделано, так как 
использование массивов проще в реализации и обычно требует меньше кода по сравнению 
со связными списками. Это делает код более понятным и легко поддерживаемым. 
Массивы представлены непрерывными блоками памяти, в то время как связные списки требуют 
дополнительной памяти для хранения указателей на следующие элементы. Использование 
массивов может быть более эффективным с точки зрения использования памяти. 
В массивах доступ к элементам осуществляется по индексу за время O(1), 
что делает операции поиска, добавления и удаления более эффективными.

– ВРЕМЕННАЯ СЛОЖНОСТЬ –
Использование хэш-таблицы позволяет удалять, изменять и добавлять новые значения 
обеспечивая при этом постоянное время выполнения операций (O(1) в среднем случае) 
благодаря использованию метода цепочек для разрешения коллизий. 
В худшем случае временная сложность операций добавления, изменения и удаления 
в хеш-таблице с методом цепочек может быть O(n), где n - количество элементов 
в самой длинной цепочке (списке) в корзине (бакете).

– ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ –
Для создания хеш-таблицы методом цепочек используется дополнительная память O(n), 
где n - общее количество элементов в таблице, включая все ключи и значения.
Это потому, что мы создаем массив корзин (бакетов), который имеет фиксированный размер, 
зависящий от общего количества элементов в таблице. 
*/

const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const END = 'end';
const LINE = 'line';
const NONE = 'None';
const GET = 'get';
const DELETE = 'delete';
const SIZE = 100003; // Простое число близкое к 10^5 для уменьшения коллизий

const printCommands = [GET, DELETE];
const errorCodes = [NONE];

const _inputLines = [];
let _curLine = 0;

_reader.on(LINE, line => {
    _inputLines.push(line);
});

process.stdin.on(END, solve);

function readNumber() {
    return Number(_inputLines[_curLine++]);
}

function readStringArray(quantity) {
    let results = '';

    const hash = new HashTable();

    for (let k = 0; k < quantity; k++) {
        const [command, value, key] = _inputLines[_curLine++].split(' ');

        const result = key ? hash[command](Number(value), Number(key)) : hash[command](Number(value));

        if (printCommands.includes(command) || errorCodes.includes(result))
            results += results ? `\n${result}` : result;
    }

    return results;
}

class HashTable {
    constructor() {
        this.size = SIZE;
        this.buckets = Array.from({ length: this.size }, () => []);
    }

    // Хеш-функция для вычисления индекса в массиве корзин
    hash(key) {
        return (key % this.size + this.size) % this.size;
    }

    // Добавление пары ключ-значение в корзину хэш-таблицы
    put(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }
        bucket.push([key, value]);
    }

    // Получение значения по ключу из корзины хэш-таблицы
    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) return bucket[i][1];
        }

        return NONE;
    }

    // Удаление ключа из корзины хэш-таблицы
    delete(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                const value = bucket[i][1];
                bucket.splice(i, 1);

                return value;
            }
        }

        return NONE;
    }
}

function solve() {
    const quantity = readNumber();
    const result = readStringArray(quantity);

    console.log(result);
}

