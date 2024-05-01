function buildIndex(documents) {
    const index = new Map();

    for (let i = 0; i < documents.length; i++) {
        const words = documents[i].split(' ');

        for (const word of words) {
            if (!index.has(word)) {
                index.set(word, []);
            }

            // Сохраняем количество вхождений слова в документе
            index.get(word).push({ docId: i + 1, count: words.filter(w => w === word).length });
        }
    }

    return index;
}

function getRelevance(documents, query) {
    const words = query.split(' ');
    const relevanceMap = new Map();

    for (const word of words) {
        if (!documents.has(word)) continue;

        const entries = documents.get(word);

        for (const entry of entries) {
            if (!relevanceMap.has(entry.docId)) {
                relevanceMap.set(entry.docId, 0);
            }

            // Увеличиваем релевантность, учитывая количество вхождений слова в документе
            relevanceMap.set(entry.docId, relevanceMap.get(entry.docId) + entry.count);
        }
    }

    return relevanceMap;
}

function search(documents, queries) {
    const index = buildIndex(documents);
    const results = [];

    for (const query of queries) {
        const relevanceMap = getRelevance(index, query);
        const sortedRelevance = Array.from(relevanceMap.entries()).sort((a, b) => {
            if (a[1] !== b[1]) {
                return b[1] - a[1];
            } else {
                return a[0] - b[0];
            }
        });

        const topResults = sortedRelevance.slice(0, 5).map(entry => entry[0]);
        results.push(topResults);
    }

    return results;
}

// Пример использования:

const documents = [
    "i like dfs and bfs",
    "i like dfs dfs",
    "i like bfs with bfs and bfs"
];

const queries = [
    "dfs dfs dfs dfs bfs"
];

const searchResults = search(documents, queries);
for (const result of searchResults) {
    console.log(result.join(' '));
}

const getOccurrences = (str, word) => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');

    return (str.match(regex) || []).length;
}

const printHash = (hash) => {
    for (const key in hash) {
        hash[key].sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);
        console.log(hash[key].map(obj => Object.keys(obj)[0]).join(' '));
    }
}

function getRelevantDocuments1(documents, queries, size) {
    const hash = {};

    for (const query of queries) {
        const queryArray = query.split(' ');
        for (let j = 0; j < size; j++) {
            let occurrences = 0;
            for (let i = 0; i < queryArray.length; i++) {
                occurrences += getOccurrences(documents[j], queryArray[i]);
            }

            if (occurrences) hash[query] = [...(hash[query] ? hash[query] : []), { [j + 1]: occurrences }];
        }
    }

    printHash(hash);
}

function getRelevance(documents, query) {
    const words = query.split(' ');
    const relevanceMap = new Map();

    for (const word of words) {
        if (!documents.has(word)) continue;

        const entries = documents.get(word);

        for (const entry of entries) {
            const docId = entry.docId;
            if (!relevanceMap.has(docId)) {
                relevanceMap.set(docId, 0);
            }

            // Consider the count of the word in the document for relevance
            relevanceMap.set(docId, relevanceMap.get(docId) + entry.count);
        }
    }

    return relevanceMap;
}

// JavaScript, Спринт 4, Финал, Задача A.Поисковая система
// Условие: https://contest.yandex.ru/contest/24414/problems/A/
// Отчёт: https://contest.yandex.ru/contest/24414/run-report/113291027/

// Пример 3

// Ввод
// 3
// i like dfs and bfs // число вхождений dfs - 4 + bfs - 1 = 5
// i like dfs dfs // число вхождений dfs = 8
// i like bfs with bfs and bfs // число вхождений bfs = 3
// 1
// dfs dfs dfs dfs bfs

// Получается, что число вхождений слов первой строки = 5, второй = 8, а третьей = 3
// По идее должен быть вывод:
// 2 1 3

// А вывод примера 3:
// 3 1 2

// В чем у меня ошибка, можете подсказать ?