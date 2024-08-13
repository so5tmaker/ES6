function siftUp(heap, index) {
    if (index === 1) {
        return;
    }

    const parentIndex = Math.floor(index / 2);
    if (heap[parentIndex] < heap[index]) {
        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
        siftUp(heap, parentIndex);
    }
}

function heapAdd(heap, key) {
    heap.push(key);
    const index = heap.length - 1;
    siftUp(heap, index);
}

module.exports = { heapAdd }