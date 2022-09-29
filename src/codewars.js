function search(n, root) {
    if (!root) return false;
    if (root.value === n) return true;
    const find = (root) => {
        let currentLeft = root && root.left;
        let currentRight = root && root.right;
        while (currentLeft || currentRight) {
            if (currentLeft) {
                console.log('currentLeft', currentLeft.value);
                if (currentLeft.value === n) {
                    return true;
                };
                return find(currentLeft.left);
            }
            if (currentRight) {
                console.log('currentRight', currentRight.value);
                if (currentRight.value === n) {
                    return true;
                };
                return find(currentRight.right);
            }
        }
        return false;
    }
    return find(root);
}

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

const SIZE = 5;
const nodes = Array.from({ length: SIZE }, (_, i) => new Node(i));

for (let i = 0; i < SIZE; i++) {
    const idx_left = 2 * i + 1;
    const idx_right = 2 * i + 2;
    nodes[i].left = nodes[idx_left] || null;
    nodes[i].right = nodes[idx_right] || null;
    console.log('idx_left', idx_left);
    console.log('idx_right', idx_right);
}

console.log(search(2, nodes[0]));