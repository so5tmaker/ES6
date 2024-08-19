let order = []; // В этом стеке будет записан порядок обхода.
const n = 5; // Длина массива равна числу вершин |V|.
const color = new Array(n).fill('white');

function topSort(v) {
    color[v] = "gray";
    for (let w of getOutgoingEdges(v)) {
        if (color[w] == "white") {
            topSort(w);
        }
    }
    color[v] = "black";
    order.push(v); // Кладём обработанную вершину в стек.
}

function mainTopSort() {
    for (let i = 0; i < n; i++) {
        if (color[i] == "white") {
            topSort(i);
        }
    }
} 