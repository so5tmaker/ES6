function siftUp(heap, index) {
    if (index === 1) {
        return index;
    }

    const parentIndex = Math.floor(index / 2);

    if (heap[parentIndex] < heap[index]) {
        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
        return siftUp(heap, parentIndex);
    }

    return index;
}

function test() {
    var sample = [-1, 12, 6, 8, 3, 15, 7];
    console.log(siftUp(sample, 5));
    console.log(sample);
    console.assert(siftUp(sample, 5) == 1);
}

test();