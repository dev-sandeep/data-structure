class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insert(data) {
        let node = new Node(data);

        if (this.size == 0) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

        this.size++;
    }

    show() {
        let head = this.head;
        while (head != null) {
            console.log(head.data);
            head = head.next;
        }
    }

    reverseShow() {
        let tail = this.tail;
        while (tail != null) {
            console.log(tail.data);
            tail = tail.prev;
        }
    }

    insertAfter(afterData, data) {
        let node = new Node(data);
        let head = this.head;
        while (head != null) {
            if (head.data > afterData) {
                node.next = head;
                head.prev = node;
                head = node;
                this.head = head;
                return head;
            }
            head = head.next;
        }
    }

    delete(data) {
        let head = this.head, next, prev, ctr = 0;

        while (head.next != null) {

            console.log(head.data, data);
            if (head.data == data) {
                console.log("resr");
                //delete logic goes here
                if (ctr++ == 0) {
                    console.log("h1");
                    next = head.next;
                    next.prev = null;
                    head = next;
                    this.head = head;
                } else {
                    console.log("h2");
                    next = head.next;
                    prev = head.prev;
                    if (next != null)
                        next.prev = prev;
                    if (prev != null)
                        prev.next = next;
                }
            }
            head = head.next;
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


let dl1 = new DLL();
dl1.insert(10);
dl1.insert(20);
dl1.insert(30);
dl1.insert(40);
dl1.insert(50);
dl1.insertAfter(45, 60);
dl1.delete(20);
dl1.show();
