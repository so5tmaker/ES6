const destroyer = (arr, ...rest) => arr.filter(x => !rest.includes(x));

function destroyer1(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    const filteredArray = [];

    for (let i = 0; i < arr.length; i++) {
        let removeElement = false;
        for (let j = 0; j < valsToRemove.length; j++) {
            if (arr[i] === valsToRemove[j]) {
                removeElement = true;
            }
        }
        if (!removeElement) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

function destroyer2(arr) {
    const valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function (val) {
        return !valsToRemove.includes(val);
    });
}

function destroyer3(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer1([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer2([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer3([1, 2, 3, 1, 2, 3], 2, 3));