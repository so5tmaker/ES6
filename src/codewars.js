function findOddMy(A) {
    const B = new Map(), C = [];
    for (let i = 0; i < A.length; i++) {
        const num = A[i];
        const maxNew = !C[num] ? 1 : C[num] + 1;
        C[num] = maxNew;
        if (maxNew % 2 > 0) {
            B.set(num, maxNew);
        } else {
            B.delete(num);
        }
    }
    return Array.from(B.keys())[0];
}

const findOdd1 = (xs) => xs.reduce((a, b) => a ^ b);

function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
console.log(findOdd([10]));
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));