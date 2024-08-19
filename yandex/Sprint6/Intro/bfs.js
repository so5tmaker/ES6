const V = 5; // Длина массива равна числу вершин |V|.

// Длины массивов равны числу вершин |V|.
let color = Array.from({ length: V }, () => 'white');
let previous = Array.from({ length: V }, () => null);
let distance = Array.from({ length: V }, () => null);

function bfs(s) {
    // Создадим очередь вершин и положим туда стартовую вершину.
    let planned = [];
    planned.push(s);
    color[s] = 'gray';
    distance[s] = 0;

    while (planned.length > 0) {
        let u = planned.shift();  // Возьмём вершину из очереди.

        for (let v of outgoingEdges(u)) {
            if (color[v] === 'white') {
                // Серые и чёрные вершины уже
                // либо в очереди, либо обработаны.
                distance[v] = distance[u] + 1;
                previous[v] = u;
                color[v] = 'gray';
                planned.push(v);  // Запланируем посещение вершины.
            }
        }
        color[u] = 'black';  // Теперь вершина считается обработанной.
    }
}

function shortestPath(v) {
    // Класть вершины будем в стек, тогда
    // стартовая вершина окажется наверху стека
    // и порядок следования от s до v будет соответствовать
    // порядку извлечения вершин из стека.
    let path = [];
    let currentVertex = v;

    while (currentVertex !== null) {
        // Предшественник вершины s равен null.
        path.push(currentVertex);
        currentVertex = previous[currentVertex];
    }

    return path;
}