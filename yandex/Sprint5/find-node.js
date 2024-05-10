class CNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findNode(root, value) {
    // Если мы пришли в поддерево, а его не существует, 
    // значит, нужного элемента в дереве поиска нет
    if (root == null) {
        return null;
    }
    if (value < root.value) {
        return findNode(root.left, value);
    }
    if (value == root.value) {
        return root;
    }
    if (value > root.value) {
        return findNode(root.right, value);
    }
}

function findNode1(root, value) {
    // Если мы пришли в поддерево, а его не существует, 
    // значит, нужного элемента в дереве поиска нет
    if (root == null) {
        return null;
    }

    let current = root;

    while (current) {
        if (value < current.value) {
            current = current.left;
        }
        if (value == current.value) {
            return current;
        }
        if (value > current.value) {
            current = current.right;
        }
    }
}

function test() {
    var node1 = new CNode(-100);
    var node2 = new CNode(55);
    var node3 = new CNode(33);
    node3.left = node1;
    node3.right = node2;
    var node4 = new CNode(202);
    node4.left = node3;
    var node5 = new CNode(330);
    node4.right = node5;
    // console.assert(solution(node4) === 3);
    console.log(node4);
    console.log(findNode1(node4, 55));
}

test();