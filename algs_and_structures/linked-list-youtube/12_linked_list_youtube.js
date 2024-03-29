// Связный список (Linked List). Структуры данных | Реализация на JS
// https://youtu.be/QdCyTTid9-U?t=1388

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString() {
        return `${this.value}`;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new LinkedListNode(value);

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    find(value) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    toArray() {
        const nodes = [];

        let node = this.head;

        while (node) {
            nodes.push(node);
            node = node.next;
        }

        return nodes;
    }

    toString() {
        return this.toArray().map(node => node.toString()).toString();
    }

}

module.exports = { LinkedList };