// Поиск кратчайшего пути в графе

let graph = {}
graph.a = { b: 2, c: 1 }
graph.b = { f: 7 }
graph.c = { d: 5, e: 2 }
graph.d = { f: 2 }
graph.e = { f: 1 }
graph.f = { g: 1 }
graph.g = {}

function shortPath(graph, start) {
    const costs = {};
    const processed = [];
    let neighbors = {};
    Object.keys(graph).forEach((node) => {
        if (node !== start) {
            costs[node] = graph[start][node] || Infinity;
        }
    });
    let node = findNodeLowestCost(costs, processed);
    console.log('costs', costs);
    while (node) {
        const cost = costs[node];
        neighbors = graph[node];
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor];
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost;
            }
        });
        console.log(costs);
        processed.push(node);
        node = findNodeLowestCost(costs, processed);
    }
    return costs;
}


function findNodeLowestCost(costs, processed) {
    let lowestCost = Infinity;
    let lowestNode;
    Object.keys(costs).forEach((node) => {
        let cost = costs[node];
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestNode = node;
        }
    })
    return lowestNode;
}

console.log(shortPath(graph, 'a'));

graph = {}
graph.start = { a: 6, b: 2 }
graph.a = { end: 1 }
graph.b = { a: 3, end: 5 }
graph.end = {}

console.log(shortPath(graph, 'start'));
