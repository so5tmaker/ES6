const n = 5; // Длина массива равна числу вершин |V|.
const color = new Array(n).fill('white');
let time = 0;
let entry = new Array(n).fill(null);
let leave = new Array(n).fill(null);


function DFS(v) { // v - номер вершины
    time += 1;  // При входе в вершину время (номер шага) увеличивается.
    entry[v] = time;  // Запишем время входа.
    color[v] = 'gray'; // Вершина посещена, но ещё не обработана.
    let outgoingEdges = getOutgoingEdges(v); // Получите список исходящих ребер в зависимости от способа хранения графа
    for (let w of outgoingEdges) {
        if (color[w] === 'white') { // Если вершина не посещена, то
            DFS(w); // запустим обход от найденной смежной вершины.
        }
    }
    time += 1;  // Перед выходом из вершины время снова обновляется.
    leave[v] = time;  // Запишем время выхода.
    color[v] = 'black'; // Теперь вершина обработана.
}

function mainDFS() {
    for (let i = 0; i < color.length; i++) {
        // Перебираем варианты стартовых вершин, пока они существуют.
        if (color[i] === 'white') {
            DFS(i); // Запускаем обход, стартуя с i-й вершины.
        }
    }
}