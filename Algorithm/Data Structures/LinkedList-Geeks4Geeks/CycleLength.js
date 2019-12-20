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

LL.prototype.createCycle = () => {
    let ptr = 1, cycleCtr = 3, prevNode = null, cycleNode = null, head = this.head;
    while (head != null) {
        if (ptr++ == cycleCtr) {
            cycleNode = head;
        }
        prev = head;
        head = head.next;
    }
    // prev.next = cycleNode;
    return this.head;
}

LL.prototype.show = () => {
    let head = this.head;
    while (head != null) {
        console.log(head.data);
        head = head.next;
    }
}

LL.prototype.countLength = () => {
    let obj = {}, ctr = 1;
    let head = this.head;
    while (head != null) {
        if (!obj[head.data])
            obj[head.data] = true;
        else
            return "cycle-"+ctr;

        ctr++;
        head = head.next;
    }

    return "end-"+ctr;
}

let L1 = new LL();
L1.insert(1);
L1.insert(2);
L1.insert(3);
L1.insert(4);
L1.insert(5);
L1.insert(6);
L1.createCycle(6);
console.log(L1.countLength());
// L1.show();