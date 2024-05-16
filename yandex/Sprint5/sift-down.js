function siftDown(heap, index) {
    const left = 2 * index;
    const right = 2 * index + 1;

    // Нет дочерних узлов
    if (left >= heap.length) {
        return;
    }

    // right < heap.length проверяет, что есть оба дочерних узла
    const indexLargest = (right < heap.length && heap[right] > heap[left]) ? right : left;

    if (heap[indexLargest] > heap[index]) {
        [heap[index], heap[indexLargest]] = [heap[indexLargest], heap[index]];
        siftDown(heap, indexLargest);
    }
}

function popMax(heap) {
    const result = heap[1];
    heap[1] = heap[heap.length - 1];
    heap.pop();
    siftDown(heap, 1);
    return result;
}