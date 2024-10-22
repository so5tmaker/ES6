function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minJ = i; // Initialize minJ to the index

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minJ]) {
                minJ = j; // Update minJ to the index of the smallest element
            }
        }

        if (minJ !== i) {
            // Swap the found minimum element with the first element
            [array[minJ], array[i]] = [array[i], array[minJ]];
        }
    }

    console.log(array);
}

let array = [4, 5, 9, 1, 3, 3, 3, 9, 7, 8, 1, 4, 1, 6, 2];
selectionSort(array); // [1, 1, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 8, 9, 9]