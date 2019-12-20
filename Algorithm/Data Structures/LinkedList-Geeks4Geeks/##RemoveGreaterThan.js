class LL {
    constructor() {
        this.head = null;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

LL.prototype.insert = (data) => {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
    return this.head;
}

LL.prototype.show = () => {
    let head = this.head;
    while (head != null) {
        console.log(head.data);
        head = head.next;
    }
}

LL.prototype.removeMoreThan = (maxVal) => {
    let deleteVal = (data) => {

        if (this.head.data > data) {
            this.head = this.head.next;
        }

        let head = this.head, prev = this.head;

        while (head != null) {
            if (head.data == data) {
                // head = head.next;
                prev.next = head.next;
            }
            prev = head;
            head = head.next;
        }

        return this.head;
    }



    let head = this.head;
    while (head != null) {
        if (head.data > maxVal) {
            deleteVal(head.data);
        }
        head = head.next;
    }
}

let l1 = new LL();
l1.insert(10);
l1.insert(20);
l1.insert(30);
l1.insert(40);
l1.insert(50);
l1.insert(55);
l1.insert(60);
l1.insert(12);
// l1.show();
l1.removeMoreThan(30);
l1.show();