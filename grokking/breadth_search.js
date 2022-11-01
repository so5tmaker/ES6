const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function breadthSearch(graph, start, end) {
    let queue = []
    queue.push(start);
    while (queue.length > 0) {
        const current = queue.shift();
        if (!graph[current]) { // [b, c], [f], [d, e]
            graph[current] = [];
        }
        if (graph[current].includes(end)) {
            return true;
        } else {
            queue = [...queue, ...graph[current]]; // [b,c], [c, f]
        }
    }
    return false;
}

console.log(breadthSearch(graph, 'a', 'e'));