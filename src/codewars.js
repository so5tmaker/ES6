function traverseDFRecursive(node, callback) {
    if (callback(node)) return true;

    if (node.left) {
        if (traverseDFRecursive(node.left, callback)) return true;
    }

    if (node.right) {
        if (traverseDFRecursive(node.right, callback)) return true;
    }

    return false;
}

function MySearch(n, root) {
    if (!root) return false;
    if (root.value === n) return true;

    return traverseDFRecursive(root, node => node.value === n);
}

const search = (n, root) => !!root && (root.value === n || search(n, root.left) || search(n, root.right));

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
const root = new Node(666, new Node(555), null);
// console.log(root);
// console.log(search(555, root));

const SIZE = 20;
const nodes = Array.from({ length: SIZE }, (_, i) => new Node(i));

for (let i = 0; i < SIZE; i++) {
    const idx_left = 2 * i + 1;
    const idx_right = 2 * i + 2;
    nodes[i].left = nodes[idx_left] || null;
    nodes[i].right = nodes[idx_right] || null;
}

console.log(search(21, nodes[0]));