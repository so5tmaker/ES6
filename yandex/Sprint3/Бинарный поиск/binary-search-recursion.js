function binarySearch(arr, x, left, right) {
    if (right <= left) { // промежуток пуст
        return -1;
    }
    // промежуток не пуст
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === x) { // центральный элемент — искомый
        return mid;
    } else if (x < arr[mid]) { // искомый элемент меньше центрального значит следует искать в левой половине
        return binarySearch(arr, x, left, mid);
    } else { // иначе следует искать в правой половине
        return binarySearch(arr, x, mid + 1, right);
    }
}

const arr = [5, 7, 16, 44, 89, 123, 456, 999];
// изначально мы запускаем двоичный поиск на всей длине массива
const index = binarySearch(arr, 16, 0, arr.length);
console.log(index);

function binarySearchDescending(arr, x, left, right) {
    if (right <= left) {
        return -1;
    }
    // промежуток не пуст
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === x) { // центральный элемент — искомый
        return mid;
    } else if (arr[mid] < x) { // искомый элемент больше центрального на этот раз все элементы больше центрального располагаются в левой половине
        return binarySearchDescending(arr, x, left, mid)
    } else { // иначе следует искать в правой половине
        return binarySearchDescending(arr, x, mid + 1, right)
    }
}
const arr1 = [999, 456, 123, 89, 44, 16, 7, 1];
// изначально мы запускаем двоичный поиск на всей длине массива
console.log(binarySearchDescending(arr1, 16, 0, arr1.length));

