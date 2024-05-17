/**
Дано бинарное дерево поиска, в котором хранятся целые числа. От этого дерева надо отделить k самых маленьких элементов. 

Реализуйте функцию, которая принимает корень дерева и число k, а возвращает два BST — в первом k наименьших элементов из исходного дерева, 
а во втором — оставшиеся вершины BST.

В вершинах дерева уже записаны корректные размеры поддеревьев (точное название поля смотрите в заготовках кода). 
После разбиения размеры должны остаться корректными — вам придётся пересчитывать их на ходу.

Ваше решение должно иметь асимптотику O ( h ), где h — высота исходного дерева.
**/

// if (process.env.REMOTE_JUDGE !== 'true') {
class Node {
    constructor(value, left = null, right = null, size = 0) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.size = size;
    }
}
// }

function findKth(root, k) {
    // Вычисляем размер левого поддерева с учётом того,
    // что оно может быть пустым.
    const leftSize = (root.left === null) ? 0 : root.left.size;
    // Если слева ровно k вершин, то искомая вершина - корень.
    if (leftSize === k) {
        return root.value;
    }
    // Если левое поддерево слишком мало, то продолжим
    // поиск в правом поддереве.
    if (leftSize < k) {
        return findKth(root.right, k - leftSize - 1);
    }
    // Иначе продолжим поиск в левом поддереве.
    return findKth(root.left, k);
}

function split(node, k) {
    // Your code
    // “ヽ(´▽｀)ノ”
    // return [null, null];

    console.log(findKth(node, k));
}

function test() {
    const node1 = new Node(3, null, null, 1);
    const node2 = new Node(2, null, node1, 2);
    const node3 = new Node(8, null, null, 1);
    const node4 = new Node(11, null, null, 1);
    const node5 = new Node(10, node3, node4, 3);
    const node6 = new Node(5, node2, node5, 6);
    const res = split(node6, 4);

    // console.assert(res[0].size === 4);
    // console.assert(res[1].size === 2);
}

test();