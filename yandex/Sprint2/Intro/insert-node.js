class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

function getNodeByIndex(node, index) {
    while (index) {
        node = node.next;
        index -= 1;
    }
    return node;
}

function insertNode(head, index, value) {
    const newNode = new Node(value);
    if (index === 0) {
        newNode.next = head;
        return newNode;
    }
    const previousNode = getNodeByIndex(head, index - 1);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    return head;
}

let node = n1, index = 2, value = 'newNode';
let head = insertNode(node, index, value);
printLinkedList(head); 