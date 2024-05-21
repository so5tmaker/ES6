/*
https://contest.yandex.ru/contest/24810/run-report/114396954/

-- ПРИНЦИП РАБОТЫ --
Я реализовал удаление в бинарном дереве так, чтобы дерево осталось корректным бинарным деревом поиска.
Если ключ в дереве не найден, то дерево не меняется.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
В процессе удаления узла мы гарантируем, что после удаления дерево останется корректным бинарным деревом поиска. 
Это достигается путем правильной замены удаляемого узла на его преемника в случае, если у удаляемого узла есть два потомка. 
После замены преемника мы также удаляем его из его исходного положения, чтобы сохранить корректность структуры дерева.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Временная сложность удаления узла составляет O(h) (где h –— высота дерева), так как мы должны выполнить поиск узла с заданным ключом.
Затем мы выполняем удаление узла, что также занимает O(h) времени в худшем случае из-за необходимости перебалансировки дерева после удаления.

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Пространственная сложность удаления узла из бинарного дерева поиска составляет O(1), 
потому что мы выполняем удаление узла без создания дополнительной структуры данных.
*/

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Функция для поиска узла с заданным значением и его родителя
function findNodeAndParent(root, key) {
    let parent = null, current = root;

    while (current && current.value !== key) {
        parent = current;
        current = key < current.value ? current.left : current.right;
    }

    return { parent, node: current };
}

// Функция для поиска минимального узла в правом поддереве и его родителя
function findMinNodeAndParent(node) {
    let parent = node;

    node = node.right;

    while (node.left) {
        parent = node;
        node = node.left;
    }

    return { parent, node };
}

// Функция удаления узла из дерева
function removeNode(root, parent, node) {
    if (!node.left || !node.right) { // если у узла нет одного из потомков
        const child = node.left || node.right;

        if (node === root) return child; // если удаляемый узел — корень дерева

        // обновление ссылок у родителя
        if (parent.left === node) parent.left = child; else parent.right = child;
    } else { // если узла есть оба потомка, то находим минимальный узел в правом поддереве
        const { parent: parentSuccessor, node: successor } = findMinNodeAndParent(node);

        node.value = successor.value; // замещаем значение удаляемого узла значением преемника

        // обновляем ссылки у родителя преемника
        if (parentSuccessor.left === successor) parentSuccessor.left = successor.right;
        else parentSuccessor.right = successor.right;
    }
    return root;
}

// Основная функция для удаления узла по ключу
function remove(root, key) {
    const { parent, node } = findNodeAndParent(root, key);

    if (!node) return root; // если узел с заданным ключом не найден

    return removeNode(root, parent, node);
}

// function test() {
//     var node1 = new Node(2, null, null);
//     var node2 = new Node(3, node1, null);
//     var node3 = new Node(1, null, node2);
//     var node4 = new Node(6, null, null);
//     var node5 = new Node(8, node4, null);
//     var node6 = new Node(10, node5, null);
//     var node7 = new Node(5, node3, node6);
//     var newHead = remove(node7, 10);
//     console.assert(newHead.value === 5);
//     console.assert(newHead.right === node5);
//     console.assert(newHead.right.value === 8);
// }

// Функция для подсчета размера дерева
function sizeOfBST(root) {
    if (!root) return 0;
    return sizeOfBST(root.left) + sizeOfBST(root.right) + 1;
}

// Тестирование
function test() {
    // Создаем бинарное дерево поиска
    const root = new Node(
        41,
        new Node(20, new Node(11), new Node(29, null, new Node(32))),
        new Node(65, new Node(50), new Node(91, new Node(72), new Node(99))),
    );

    // Удаляем узел с ключом 41
    const newRoot = remove(root, 41);

    // Проверяем корректность размера дерева
    const expectedSize = 9; // Ожидаемый размер дерева
    const actualSize = sizeOfBST(newRoot); // Фактический размер дерева
    if (expectedSize === actualSize) {
        console.log('Size of BST matches with the answer, size:', actualSize);
    } else {
        console.log(
            'Size of BST does not match with the answer, expected =',
            expectedSize,
            'actual is',
            actualSize,
        );
    }

    console.log(newRoot);
}

test();