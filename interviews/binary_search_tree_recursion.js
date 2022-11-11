function sumTree(tree) {
    let count = tree.value;
    if (tree.left) {
        count += sumTree(tree.left);
    }
    if (tree.right) {
        count += sumTree(tree.right);
    }
    return count;
}

const binaryTree = {
    value: 6,
    left: {
        value: 5,
        left: {
            value: 3,
            left: { value: 1 }
        },
        right: { value: 7 }
    },
    right: {
        value: 10,
        left: { value: 4 },
        right: { value: 5 }
    }
};
console.dir(binaryTree);
console.log(sumTree(binaryTree));
