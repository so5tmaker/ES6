class Node {
    constructor(data) {
        this.data = data;  // The data stored in the node
        this.next = null; // Pointer to the next node
    }
}

// The Node class represents a single node in the linked list.
// It has a constructor that takes in data as a parameter and assigns it to the data property of the node.
// The next property is initially set to null, indicating that there is no next node.

class LinkedList {
    constructor() {
        this.head = null; // Head node of the linked list
    }

    append(data) {
        const newNode = new Node(data); // Create a new node with the given data
        if (!this.head) { // If the list is empty
            this.head = newNode; // Set the new node as the head
            return;
        }

        let current = this.head; // Start at the head of the list
        while (current.next) { // Traverse to the last node
            current = current.next;
        }

        current.next = newNode; // Set the next pointer of the last node to the new node
    }

    printList() {
        let current = this.head; // Start at the head of the list
        while (current) { // Traverse through the list
            console.log(current.data); // Print the data of the current node
            current = current.next; // Move to the next node
        }
    }
}

// The LinkedList class represents the actual linked list and contains methods to manipulate the list.
// It has a constructor that initializes the head property to null, indicating an empty list.
// The append method adds a new node with the given data to the end of the list.
// If the list is empty (i.e., the head is null), the new node becomes the head of the list.
// Otherwise, it traverses through the list using a variable current until it reaches the last node.
// It then sets the next property of the last node to the new node, effectively adding it at the end.
// The printList method traverses through the list, starting from the head node, and prints the data of each node.

const linkedList = new LinkedList(); // Create a new instance of the LinkedList class
linkedList.append(1); // Add elements to the list
linkedList.append(2);
linkedList.append(3);

linkedList.printList(); // Print the list: 1, 2, 3

// This section demonstrates the usage of the linked list.
// A new instance of the LinkedList class is created using the new keyword.
// Elements (1, 2, 3) are added to the list using the append method.
// Finally, the printList method is called to print the contents of the list.