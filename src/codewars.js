function search(n, root) {
    if (!root) return false;
    if (root.value === n) return true;
    let currentLeft = root.left;
    let currentRight = root.right;
    while (currentLeft || currentRight) {
        if (currentLeft) {
            if (currentLeft.value === n) return true;
            currentLeft = currentLeft.left;
        }
        if (currentRight) {
            if (currentRight.value === n) return true;
            currentRight = currentRight.left;
        }
    }
    return false;
}

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
const root = new Node(666, new Node(555), null);
console.log(root);
console.log(search(555, root));

const SIZE = 20;
const nodes = Array.from({ length: SIZE }, (_, i) => new Node(i));

for (let i = 0; i < SIZE; i++) {
    const idx_left = 2 * i + 1;
    const idx_right = 2 * i + 2;
    nodes[i].left = nodes[idx_left] || null;
    nodes[i].right = nodes[idx_right] || null;
}

console.log(nodes);