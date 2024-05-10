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
    const getMaxSum = (left, right, value) => {
        if (!left && !right) return value;

        let maxLeft = Math.max(left ? left.value : 0, value);
        let maxRight = Math.max(right ? right.value : 0, value);

        const max = Math.max(maxLeft, maxRight);

        maxLeft = getMaxSum(left?.left, left?.right, max);
        maxRight = getMaxSum(right?.left, right?.right, max);

        return Math.max(maxLeft, maxRight);
    }

    return getMaxSum(root.left, root.right, root.value);
}

function test() {
    var node1 = new CNode(-100);
    var node2 = new CNode(55);
    var node3 = new CNode(33);
    node3.left = node1;
    node3.right = node2;
    var node4 = new CNode(202);
    node4.left = node3;
    var node5 = new CNode(-330);
    node4.right = node5;
    // console.assert(solution(node4) === 3);
    console.log(node4);
    console.log(solution(node4));
}

test();