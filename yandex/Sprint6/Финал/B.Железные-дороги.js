/*
https://contest.yandex.ru/contest/25070/run-report/114850669/

-- ПРИНЦИП РАБОТЫ --
Я реализовал поиск по карте железных с модифицированным методом обхода графа DFS (поиск в глубину), со списками смежности.
Этот подход позволяет определить, является ли карта железных дорог оптимальной (если граф не имеет цикл).
Нам нужно три цвета, чтобы искать циклы в графе, поэтому красим вершины в три цвета, 
если в процессе обхода получаем серый цвет, значит в графе есть цикл.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Использование модифицированного метода обхода графа DFS позволяет быть уверенным, что алгоритм корректно покажет оптимальна ли карта, 
так как он проверяет граф на цикл.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Так как, граф представлен списками смежности, то перебор всех смежных вершин может занять время, пропорциональное числу этих вершин O(V).
Необходимо пройти по каждому ребру по одному разу, что займёт O(E). Получим, что итоговая сложность алгоритма O(V+E),
где V — количество вершин, а E — количество рёбер.

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Для реализации алгоритма используется дополнительная память для хранения списков смежности. 
Это требует O(V + E) дополнительной памяти, где V — количество вершин, а E — количество рёбер, 
что означает, что пространственная сложность составляет O(V + E).
*/

const readline = require("readline");

const Colors = {
    WHITE: 'white',
    GRAY: 'gray',
    BLACK: 'black',
};

const { WHITE, GRAY, BLACK } = Colors;

const B = 'B';
const R = 'R';

const YES = 'YES';
const NO = 'NO';

const LINE = 'line';
const CLOSE = 'close';

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const inputLines = [];
let curLine = 0;

reader.on(LINE, line => inputLines.push(line));
reader.on(CLOSE, solve);

const readLine = () => inputLines[curLine++];

// функция с модифицированным методом обхода графа DFS
function dfs(vertex, graph, colors) {
    const stack = [vertex];

    while (stack.length > 0) {
        const v = stack.pop();
        if (colors[v] === WHITE) {
            colors[v] = GRAY;
            stack.push(v);

            for (const neighbor of graph[v]) {
                if (colors[neighbor] === WHITE)
                    stack.push(neighbor);
                // найден цикл
                else if (colors[neighbor] === GRAY) return true;

            }
        } else if (colors[v] === GRAY) colors[v] = BLACK;
    }

    return false;
}

// функция проверки оптимальности карты
function checkOptimality(graph) {
    const colors = Array(graph.length).fill(WHITE);

    for (let i = 0; i < graph.length; i++)
        if (colors[i] === WHITE && dfs(i, graph, colors)) return false;

    return true;
}

// функция получения ребер графа
const getEdges = (n, graph) => {
    for (let i = 0; i < n - 1; i++) {
        const roads = readLine().trim();

        for (let j = 0; j < roads.length; j++) {
            const typeRoad = roads[j];
            const cityA = i;
            const cityB = i + j + 1;

            if (typeRoad === B) graph[cityA].push(cityB);
            else if (typeRoad === R) graph[cityB].push(cityA);
        }
    }

    return graph;
};

function solve() {
    const n = parseInt(readLine().trim(), 10);
    const graph = Array.from({ length: n }, () => []);

    const edges = getEdges(n, graph);

    if (checkOptimality(edges)) console.log(YES);
    else console.log(NO);
}