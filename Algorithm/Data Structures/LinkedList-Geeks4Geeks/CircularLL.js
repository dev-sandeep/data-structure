class LL {
    constructor() {
        this.head = null;
    }

    insert(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        return this.node;
    }

    show() {
        let head = this.head;
        let obj = {};
        while (head != null) {

            if (!obj[head.data]) {
                obj[head.data] = true;
                console.log(head.data);
            } else {
                return;
            }
            head = head.next;
        }
    }

    makeCircular() {
        let prev = null, head = this.head;
        while (head != null) {
            prev = head;
            head = head.next;
        }

        prev.next = this.head;
    }

    deleteNode(data) {
        let head = this.head, prev = null;
        let obj = {};

        if (head.data == data) {
            head = head.next;
            prev = head;
        }

        while (head != null) {
            if (!obj[head.data]) {
                obj[head.data] = true;
            }else{
                return this.head;
            }
            if (head.data == data) {
                prev.next = head.next;
            }
            prev = head;
            head = head.next;
        }

        return this.head;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let l1 = new LL();
l1.insert(10);
l1.insert(20);
l1.insert(30);
l1.insert(40);
l1.insert(50);
l1.makeCircular();
l1.deleteNode(20);
l1.show();