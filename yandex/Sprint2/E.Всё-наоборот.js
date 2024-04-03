// if (process.env.REMOTE_JUDGE !== 'true') {
class Node {
    constructor(value = null, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}
// }



function solution(node) {
    let current = node, newHead = null;

    while (current) {
        const temp = current.next;

        current.next = current.prev;
        current.prev = temp;

        newHead = current;

        current = temp;
    }

    return newHead;
}

function printNode(node) {
    let current = node;

    while (current) {
        console.log(current.value);

        current = current.next;
    }
}

function test() {
    var node3 = new Node("node3");
    var node2 = new Node("node2", node3);
    var node1 = new Node("node1", node2);
    var node0 = new Node("node0", node1);
    node1.prev = node0;
    node2.prev = node1;
    node3.prev = node2;
    printNode(node0);
    var newHead = solution(node0);
    console.log(newHead);
    printNode(newHead);
    /*
    result is newHead === node3
    node0.prev === node1
    node1.next === node0
    node1.prev === node2
    node2.next === node1
    node2.prev === node3
    node3.next === node2
    */
}

test();