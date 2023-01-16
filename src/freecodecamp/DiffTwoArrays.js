function diffArray(arr1, arr2) {
    const newArr = [];
    const setDiffElement = (first, second) => {
        for (let i = 0; i < first.length; i++) {
            if (!second.includes(first[i])) {
                newArr.push(first[i]);
            }
        }
    }

    setDiffElement(arr1, arr2);
    setDiffElement(arr2, arr1);
    // Find the diff in the first array then the diff in the second and push them in a new array
    return newArr;
}

const diffArray1 = (arr1, arr2) => {
    const diff = (a, b) => a.filter(item => b.indexOf(item) === -1);
    // Find the diff in the first array then the diff in the second and push them in a new array
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];
}

const diffArray2 = (arr1, arr2) => arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
// First, we merge two arrays, after that loop in merged array to check
// whether each item exists in the both arrays and accept only different elements.

const diffArray3 = (arr1, arr2) => {
    const diff = new Set(arr1);
    arr2.forEach(item => diff.has(item) ? diff.delete(item) : diff.add(item));
    // First we add all elements of the first array to a new set, 
    // then loop the second array, if we find the same element then delete it vise versa add in the set
    return Array.from(diff);
    // In the end, we convert the set into an array and return it.
}

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray1([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray2([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray3([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));