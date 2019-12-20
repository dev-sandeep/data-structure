class LL {
    constructor() {
        this.head = null;
    }
}

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = null;
    }
}

LL.prototype.insertBegnining = (data) => {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
    return this.head;
}

LL.prototype.insertAfter = (data, nodeData) => {
    let node = new Node(data);
    let head = this.head;
    let tail = null;
    let nextNode = null;
    while (head != null) {
        if (head.data == nodeData) {
            tail = head;
            nextNode = head.next;
        }

        head = head.next;
    }

    if (tail != null) {
        tail.next = node;
        node.next = nextNode;
    }
}

LL.prototype.delete = (data) => {
    let head = this.head;
    let prev = null;
    let nodeTobeDelted = null;
    let nodeTobeDeltedPrev = null;
    while (head != null) {
        if (head.data == data) {
            // console.log("got it", head.data);
            nodeTobeDelted = head;
            nodeTobeDeltedPrev = prev;
        }
        prev = head;
        head = head.next;
    }

    nodeTobeDeltedPrev.next = nodeTobeDelted.next;
    return this.head;
}

LL.prototype.deletePosition = (pos) => {
    let ctr = 0;
    let head = this.head;
    let delThis = null, delPrev = head, prev = head;

    if (pos == 0) {
        this.head = this.head.next;
        return;
    }
    while (head != null) {
        if (ctr++ == pos) {
            delThis = head;
            delPrev = prev;
        }

        prev = head;
        head = head.next;
    }
    if (delThis != null)
        delPrev.next = delThis.next;
}

LL.prototype.show = () => {
    let head = this.head;
    let ctr = 1;
    while (head != null && ctr++ < 9) {
        console.log(head.data);
        head = head.next;
    }
}

LL.prototype.findLength = () => {
    let ctr = 0, head = this.head;
    while (head != null) {
        ctr++;
        head = head.next;
    }

    console.log(ctr);
}

let ll1 = new LL();

ll1.insertBegnining("b10");
ll1.insertBegnining("b20");
ll1.insertBegnining("b30");
ll1.insertBegnining("b40");
ll1.insertAfter("30", "b30");
ll1.delete("30");
ll1.deletePosition(1);
ll1.show();
ll1.findLength();