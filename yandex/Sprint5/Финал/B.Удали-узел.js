/*
https://contest.yandex.ru/contest/24810/run-report/114357608/

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

// if (process.env.REMOTE_JUDGE !== 'true') {
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
// }

function remove(root, key) {
    let current = root;
    let parent = null;

    // Находим узел с заданным ключом и его родителя
    while (current !== null && current.value !== key) {
        parent = current;

        if (key < current.value) current = current.left; else current = current.right;
    }

    // Если узел не найден, возвращаем исходное дерево
    if (current === null) return root;

    // Удаляем узел из дерева
    if (current.left === null && current.right === null) {
        // Если у удаляемого узла нет потомков
        if (parent === null) return null; // Удаляем корневой узел

        if (parent.left === current) parent.left = null; else parent.right = null;

    }

    if (current.left === null || current.right === null) {
        // Если у удаляемого узла есть только один потомок
        let child = current.left !== null ? current.left : current.right;

        if (parent === null) return child; // Удаляем корневой узел

        if (parent.left === current) parent.left = child; else parent.right = child;

    } else {
        // Если у удаляемого узла два потомка
        let successor = current.right;
        let successorParent = current;

        while (successor.left !== null) {
            successorParent = successor;
            successor = successor.left;
        }

        if (successorParent !== current) {
            successorParent.left = successor.right;
            successor.right = current.right;
        }

        successor.left = current.left;

        if (parent === null) return successor; // Удаляем корневой узел

        if (parent.left === current) parent.left = successor; else parent.right = successor;

    }

    return root;
}

function test() {
    var node1 = new Node(2, null, null);
    var node2 = new Node(3, node1, null);
    var node3 = new Node(1, null, node2);
    var node4 = new Node(6, null, null);
    var node5 = new Node(8, node4, null);
    var node6 = new Node(10, node5, null);
    var node7 = new Node(5, node3, node6);
    var newHead = remove(node7, 10);
    console.assert(newHead.value === 5);
    console.assert(newHead.right === node5);
    console.assert(newHead.right.value === 8);
}

test();