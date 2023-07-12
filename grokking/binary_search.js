const binary_search = (list, item) => {
    let low = 0;
    let high = list.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        const guess = list[mid];
        if (guess === item) {
            return mid;
        }
        if (guess > item) {
            high = --mid;
        } else {
            low = ++mid;
        }
    }
    return null;
}

console.log(binary_search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 12))