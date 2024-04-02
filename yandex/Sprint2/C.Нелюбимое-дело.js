// if (process.env.REMOTE_JUDGE !== 'true') {
class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}
// }

function solution(node, index) {
    if (index === 0) return node.next;

    let current = node;
    let newIndex = index - 1;

    while (newIndex && current?.next) {
        current = current.next;
        newIndex--;
    }

    if (current.next) current.next = current.next.next;

    return node;
}

function solutionFor(node, index) {
    if (index === 0) return node.next;;

    let current = node;
    for (let i = 0; i < index - 1 && current.next !== null; i++) {
        current = current.next;
    }

    if (current.next !== null) current.next = current.next.next;

    return node;
}

function createLinkedListFromString(str) {
    const lines = str.trim().split('\n'); // split the string into lines
    let head = null;
    let current = null;

    for (let i = lines.length - 1; i >= 0; i--) { // iterate in reverse order to maintain the sequence
        if (!head) {
            // If no head, create the first node
            head = new Node(lines[i]);
            current = head;
        } else {
            // Else link the new node to the existing chain
            current = new Node(lines[i], current);
        }
    }

    return current; // Return the head of the list
}

function test() {
    const str = `ooh schvlqb
tksxc ezl qkoljfe
gyisnuuno
ao jopemxsjgs
uyjj vz oywl
lq nyofyoqvwk vnvfatd
ihqua gotedfgveh
dbhjnmlm crxthc eiqsshocyq fykboym
sgtxxh cb
iiyumj x
wnfrhnxl zrma
kfv mu kyov
xwlrbyx dlnpqphr`;

    const linkedListHead = createLinkedListFromString(str);
    // var node3 = new Node("node3");
    // var node2 = new Node("node2", node3);
    // var node1 = new Node("node1", node2);
    // var node0 = new Node("node0", node1);
    console.log(solution(linkedListHead, 0));

    console.log('*********************************');
    // var nodeFor3 = new Node("nodeFor3");
    // var nodeFor2 = new Node("nodeFor2", nodeFor3);
    // var nodeFor1 = new Node("nodeFor1", nodeFor2);
    // var nodeFor0 = new Node("nodeFor0", nodeFor1);
    console.log(solutionFor(linkedListHead, 0));

    /*
    Output is:
    node0
    node1
    node2
    node3
    */
}

test();