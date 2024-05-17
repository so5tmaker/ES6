/**
Напишите функцию, совершающую просеивание вниз в куче на максимум. Гарантируется, 
что порядок элементов в куче может быть нарушен только элементом, от которого запускается просеивание.
Функция принимает в качестве аргументов массив, в котором хранятся элементы кучи, и индекс элемента, 
от которого надо сделать просеивание вниз. Функция должна вернуть индекс, 
на котором элемент оказался после просеивания. 
Также необходимо изменить порядок элементов в переданном в функцию массиве.
Индексация в массиве, содержащем кучу, начинается с единицы. Таким образом, сыновья вершины на позиции 
v это 2 v и 2 v + 1. Обратите внимание, что нулевой элемент в передаваемом массиве фиктивный, 
вершина кучи соответствует 1-му элементу.

Вот мое решение:
 */

function siftDown(heap, index) {
    const left = 2 * index;
    const right = 2 * index + 1;
    let indexLargest = index;

    if (left < heap.length && heap[left] > heap[indexLargest]) {
        indexLargest = left;
    }
    if (right < heap.length && heap[right] > heap[indexLargest]) {
        indexLargest = right;
    }

    if (indexLargest !== index) {
        [heap[index], heap[indexLargest]] = [heap[indexLargest], heap[index]];
        return siftDown(heap, indexLargest);
    }

    return index;
}

function test() {
    var sample = [-1, 12, 1, 8, 3, 4, 7];
    const idx = siftDown(sample, 2);
    console.log(idx);
    console.log(sample);
    console.assert(idx == 5);
}

test();