/*
Алла пошла на стажировку в студию графического дизайна, где ей дали такое задание: 
для очень большого числа ориентированных графов преобразовать их список рёбер в список смежности. 
Чтобы побыстрее решить эту задачу, она решила автоматизировать процесс.
Помогите Алле написать программу, которая по списку рёбер графа будет строить его список смежности.

Формат ввода
В первой строке дано число вершин n (1 ≤ n ≤ 100) и число ребер m (1 ≤ m ≤ n(n-1)). 
В следующих m строках заданы ребра в виде пар вершин (u,v), если ребро ведет от u к v.

Формат вывода
Выведите информацию о рёбрах, исходящих из каждой вершины.
В строке i надо написать число рёбер, исходящих из вершины i, 
а затем перечислить вершины, в которые ведут эти рёбра –— в порядке возрастания их номеров.

Пример

Ввод	
5 6
1 3
1 4
2 3
4 5
4 3
5 2
Вывод
2 3 4
1 3 
0 
2 3 5 
1 2 
*/

const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin
});

const END = 'end';
const LINE = 'line';

const _inputLines = [];
let _curLine = 0;

// Установим callback на считывание строки - так мы получим
// все строки из ввода в массиве _inputLines.
_reader.on(LINE, line => _inputLines.push(line));

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on(END, solve);

const readNumbers = () => _inputLines[_curLine++].split(' ');

const readStringArray = (ribs) => {
    const list = [];

    for (let k = 0; k < ribs; k++) {
        const [u, v] = _inputLines[_curLine++].split(' ');

        if (list[u]) { list[u] = [...list[u], v]; continue; }

        list[u] = [v];
    };

    return list;
}

function solve() {
    const [vertices, ribs] = readNumbers();
    const list = readStringArray(Number(ribs));

    for (let i = 1; i <= Number(vertices); i++) {
        if (list[i]) {
            const newRibs = list[i].sort((a, b) => (a - b));
            console.log(`${newRibs.length} ${newRibs.join(' ')}`);
            continue;
        }

        console.log(0);
    }
}