class LL {
    constructor() {
        this.head = null;
    }

    insert(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        return this.head;
    }

    show() {
        let head = this.head;
        while (head != null) {
            console.log(head.data);
            head = head.next;
        }
    }

    reverse() {
        let next = null, prev = null, head = this.head, ctr = 0;
        while (head != null) {
            //saving the next temporarily
            next = head.next;
            //this is where we are reversing the pointer
            head.next = prev;

            //saving the head
            prev = head;
            //continue traversing[head = head.next]
            head = next;
        }
        this.head = prev;
        return prev;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let n1 = new LL();
n1.insert(10);
n1.insert(20);
n1.insert(30);
n1.insert(40);
n1.insert(50);
n1.insert(60);
n1.reverse();
n1.show();