// if (process.env.REMOTE_JUDGE !== 'true') {
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
// }

function insert(node, key) {
    const insertNode = (root, value) => {
        if (root === null) {
            return new Node(value);
        }

        if (value < root.value) {
            root.left = insertNode(root.left, value);
        } else if (value >= root.value) {
            root.right = insertNode(root.right, value);
        }

        return root;
    }

    return insertNode(node, key);
}

function test() {
    var node1 = new Node(7, null, null);
    var node2 = new Node(8, node1, null);
    var node3 = new Node(7, null, node2);
    var newHead = insert(node3, 7);
    console.assert(newHead === node3);
    console.assert(newHead.right.left.right.value === 7);
    console.log(newHead);
}

test();