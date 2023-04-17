const updateInventory = (arr1, arr2) => {
    let update = [];
    for (const inv of arr2) {
        let isNew = true;
        for (const old of arr1) {
            if (old[1] === inv[1]) {
                old[0] = old[0] + inv[0];
                isNew = false;
            }
        }
        if (isNew) {
            update.push(inv);
        }
    }

    const sort = (a, b) => {
        if (a[1] > b[1]) {
            return 1;
        }
        if (a[1] < b[1]) {
            return -1;
        }
        return 0;
    }

    return [...update, ...arr1].sort(sort);
}

console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));