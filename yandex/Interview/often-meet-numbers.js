/**
Ввод: nums = [1,1,1,2,2,3], k = 2
[1,2]
/**
- цикл для сбора повторов чисел в хеш-таблице
- отсортировать хеш-таблицу, преобразовав ее в массив {1:3, 2:2, 3:1} [{}, {}, {}], сортируем таблицу по значению ключа в порядке неубывания
- из полученного массива мы выделим k элементов и возвратим
*/

const oftenMeetNumbers = (nums, k) => {
    const box = {};

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];

        if (box[current]) box[current]++;
        else box[current] = 1;
    }

    const result = Object.entries(box).sort((a, b) => b[1] - a[1]).slice(0, k); // [[1,3], [2,2]]

    return result.map(i => Number(i[0]));
}

/**
box = {1:3, 2:2, 3:1}
// [[1,3], [2,2], [3,1]] sort [[1,3]... return
*/

/**
 * Ввод: nums = [1,1,1,2,2,3], k = 2
 * Вывод: [1, 2]
 * 
 * 1. Сбор повторов чисел в хеш-таблице.
 * 2. Преобразование хеш-таблицы в массив пар [число, частота].
 * 3. Сортировка массива по частоте в порядке убывания.
 * 4. Извлечение первых k элементов.
 * 5. Возврат чисел с наибольшей частотой.
 */

const oftenMeetNumbersImproved = (nums, k) => {
    const frequencyMap = {};

    // Сбор повторов чисел в хеш-таблице
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];

        if (frequencyMap[current]) {
            frequencyMap[current]++;
        } else {
            frequencyMap[current] = 1;
        }
    }

    // Преобразование хеш-таблицы в массив пар [число, частота] и сортировка по частоте
    const sortedEntries = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1]);

    // Извлечение первых k элементов
    const topKFrequent = sortedEntries.slice(0, k);

    // Возврат чисел с наибольшей частотой
    return topKFrequent.map(entry => Number(entry[0]));
}

// Пример использования
console.log(oftenMeetNumbers([1, 1, 1, 2, 2, 3], 2)); // [1, 2]

/**
 * Для дальнейшей оптимизации вашего алгоритма по времени и памяти можно рассмотреть следующие шаги:

1. **Использование структуры данных для подсчета частот**: Вместо хранения частот всех элементов и сортировки всего массива частот, 
можно использовать структуру данных, которая позволяет эффективно находить k наиболее частых элементов. Например, мин-куча (min-heap) размером k.

2. **Пространственная оптимизация**: Мы можем избегать использования массивов для частот и вместо этого использовать объект с элементами и их частотами.

Ниже представлено оптимизированное решение с использованием `MinHeap` для k наиболее частых элементов. MinHeap позволит сохранять k наиболее частых элементов в куче, 
а любые менее частые элементы будут удаляться:

 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.size() === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index][1] >= this.heap[parentIndex][1]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        const lastIndex = this.heap.length - 1;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex <= lastIndex && this.heap[leftChildIndex][1] < this.heap[smallest][1]) {
                smallest = leftChildIndex;
            }

            if (rightChildIndex <= lastIndex && this.heap[rightChildIndex][1] < this.heap[smallest][1]) {
                smallest = rightChildIndex;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

const oftenMeetNumbersHeap = (nums, k) => {
    const frequencyMap = {};

    // Сбор повторов чисел в хеш-таблице
    for (const num of nums) {
        if (frequencyMap[num] !== undefined) {
            frequencyMap[num]++;
        } else {
            frequencyMap[num] = 1;
        }
    }

    // Использование MinHeap для k наиболее частых элементов
    const minHeap = new MinHeap();
    for (const [num, freq] of Object.entries(frequencyMap)) {
        minHeap.insert([num, freq]);
        if (minHeap.size() > k) {
            minHeap.extractMin();
        }
    }

    // Извлечение чисел из MinHeap
    const result = [];
    while (minHeap.size() > 0) {
        result.push(Number(minHeap.extractMin()[0]));
    }

    // Порядок может быть изменен, поэтому сортируем результат по частоте в порядке убывания
    return result.sort((a, b) => frequencyMap[b] - frequencyMap[a]);
}

// Пример использования
console.log(oftenMeetNumbers([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
