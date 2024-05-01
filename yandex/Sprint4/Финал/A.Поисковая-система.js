/*
https://contest.yandex.ru/contest/24414/run-report/113293135/

– ПРИНЦИП РАБОТЫ –
В начале создается индекс для каждого слова в документах и подсчитывается количество его вхождений в каждый документ. 
Если одно слово встречается много раз в одном документе, его количество вхождений учитывается соответствующим образом 
для вычисления релевантности. Затем вычисляется релевантность каждого документа для данного запроса, 
учитывая только уникальные слова в запросе и количество их вхождений в каждый документ. 
Перед выводом происходит сортировка документов по убыванию значения релевантности, 
а затем по возрастанию их идентификаторов в случае равенства релевантности. 
И в конце, выводятся 5 наиболее релевантных документов.

– ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ –
Созданный поисковый индекс (хеш-таблица) позволяет быстро находить нужные вхождения количества уникальных слов в каждый документ. 
Затем с помощью этого индекса корректно вычисляется релевантность каждого документа для данного запроса, 
учитывая количество вхождений слов в каждый документ, даже если слово встречается несколько раз в одном документе.

– ВРЕМЕННАЯ СЛОЖНОСТЬ –
Построение индекса имеет временную сложность O(nm), где n - количество документов, m - средняя длина документа. 
Получение релевантных документов имеет временную сложность O(ql), где q - количество уникальных слов в запросе, 
l - среднее количество вхождений слова в документ. Сортировка релевантных документов имеет временную сложность O(dlog(d)), 
где d - количество документов. Итого временная временную сложность поиска O(k(nm + ql + d*log(d))), где k - количество запросов.

– ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ –
Для построения индекса используется дополнительная память O(nm), где n - количество документов, m - средняя длина документа. 
Для вычисления релевантности используется дополнительная память O(q), где q - количество уникальных слов в запросе. 
Для сортировки используется дополнительная память O(d), где d - количество документов. 
Общая пространственная сложность программы может быть оценена как O(nm + q + d).
*/

const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

// Установим callback на считывание строки - так мы получим
// все строки из ввода в массиве _inputLines.
_reader.on('line', line => {
    _inputLines.push(line);
});

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on('end', solve);

// Функция парсит число из очередной строки массива _inputLines
// и сдвигает указатель на единицу вперёд.
function readNumber() {
    return Number(_inputLines[_curLine++]);
}

function readStringArray(quantity) {
    const documents = [];

    for (let k = 0; k < quantity; k++) {
        documents.push(_inputLines[_curLine++]);
    }

    return documents;
}

function buildIndex(quantity) {
    const index = new Map();

    for (let i = 0; i < quantity; i++) {
        const words = _inputLines[_curLine++].split(' ');

        const wordCount = {};

        for (const word of words) {
            if (!wordCount[word]) wordCount[word] = 0;

            wordCount[word]++;
        }

        for (const word in wordCount) {
            if (!index.has(word)) index.set(word, []);

            index.get(word).push({ id: i + 1, count: wordCount[word] });
        }
    }

    return index;
}

function getRelevance(documents, query) {
    const words = query.split(' ');
    const uniqueWords = new Set(words);
    const map = new Map();

    for (const word of uniqueWords) {
        if (!documents.has(word)) continue;

        const entries = documents.get(word);

        for (const entry of entries) {
            const { id, count } = entry;

            if (!map.has(id)) map.set(id, 0);

            map.set(id, map.get(id) + count);
        }
    }

    return map;
}

const sortRelevance = (map) => Array.from(map.entries()).sort((a, b) =>
    a[1] !== b[1] ? b[1] - a[1] : a[0] - b[0]);

function search(index, queries) {
    for (const query of queries) {
        const relevance = getRelevance(index, query);
        const sortedRelevance = sortRelevance(relevance);
        const topResults = sortedRelevance.slice(0, 5).map(entry => entry[0]);

        console.log(topResults.join(' '));
    }
}

function solve() {
    const quantity = readNumber();
    const index = buildIndex(quantity);
    const size = readNumber();
    const queries = readStringArray(size);

    search(index, queries);
}