// if (process.env.REMOTE_JUDGE !== 'true') {
class CNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// }

function solution(root) {

    function getHeight(node) {
        if (node === null) return 0;
        return 1 + Math.max(getHeight(node.left), getHeight(node.right));
    }

    function isBalanced(root) {
        if (root === null) return true;

        let leftHeight = getHeight(root.left);
        let rightHeight = getHeight(root.right);

        if (Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.left) && isBalanced(root.right)) {
            return true;
        }

        return false;
    }

    return isBalanced(root);
}

function test() {
    var node0 = new CNode(0);
    var node1 = new CNode(1);
    var node2 = new CNode(2);
    var node3 = new CNode(3);
    var node4 = new CNode(4);
    var node5 = new CNode(5);
    var node6 = new CNode(6);
    var node7 = new CNode(7);
    var node8 = new CNode(8);
    node0.left = node1;
    node0.right = node2;
    node1.left = node3;
    node1.right = null;
    node2.left = null;
    node2.right = node4;
    node3.left = node5;
    node3.right = node6;
    node4.left = node7;
    node4.right = node8;

    console.assert(solution(node0) === false);
    console.log(solution(node0));
}

test();

// function test() {
//     var node0 = new CNode(6);
//     var node1 = new CNode(1);
//     // node1.right = node0;
//     var node2 = new CNode(-5);
//     var node3 = new CNode(3);
//     node3.left = node1;
//     node3.right = node2;
//     var node4 = new CNode(10);
//     node4.right = node0;
//     var node5 = new CNode(2);
//     node5.left = node3;
//     node5.right = node4;
//     console.assert(solution(node5));
//     console.log(solution(node5));
// }

// test();