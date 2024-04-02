// if (process.env.REMOTE_JUDGE !== 'true') {
class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}
// }

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

function solution(node, val) {
    let current = node, index = 0;

    while (current) {
        if (current.value === val) return index;

        current = current.next;
        index++;
    }

    return -1;
}

function test(str) {


    const linkedListHead = createLinkedListFromString(str);
    // var node3 = new Node("node3");
    // var node2 = new Node("node2", node3);
    // var node1 = new Node("node1", node2);
    // var node0 = new Node("node0", node1);
    console.log(solution(linkedListHead, 'xwlrbyx'));


    /*
    Output is:
    node0
    node1
    node2
    node3
    */
}

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

test(str);