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

LL.prototype.showAndCycle = () => {
    let head = this.head;
    //connect with 2nd element
    let ptr = 0;
    let connectPtr = 2;
    let connectNode = null;
    let prev = null;
    while (head != null) {
        if (ptr++ == connectPtr) {
            connectNode = head;
        }
        prev = head;
        head = head.next;
    }
    prev.next = connectNode;
    return head;
}

LL.prototype.show = () => {
    let head = this.head;
    while (head != null) {
        console.log(head.data);
        head = head.next;
    }
}

LL.prototype.detectCycle = () => {
    let slowPt = null, fastPt = null, obj = {};
    let head = this.head;
    while (head != null) {
        if (obj[head.data])
            return true;
        else
            obj[head.data] = true;

        head = head.next;
    }

    return false;
}

let l1 = new LL();
l1.insert(1);
l1.insert(2);
l1.insert(3);
l1.insert(4);
l1.insert(5);
l1.insert(6);
l1.insert(7);
l1.insert(8);
l1.showAndCycle();
// l1.show();
console.log(l1.detectCycle());