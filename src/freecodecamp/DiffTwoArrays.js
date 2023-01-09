function diffArray(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const newArr = [];
    const setDiffElement = (set, arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (i < arr.length) {
                if (!set.has(arr[i])) {
                    newArr.push(arr[i]);
                }
            }
        }
    }

    setDiffElement(set2, arr1);
    setDiffElement(set1, arr2);

    return newArr;
}

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]))