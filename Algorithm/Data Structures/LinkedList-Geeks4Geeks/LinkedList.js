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
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;

    return this.head;
}

LL.prototype.insertEnd = (data) => {
    let newNode = new Node(data);
    let head = this.head, tail = null;
    while (head != null) {
        if (head.next == null)
            tail = head;

        head = head.next;
    }

    tail.next = newNode;
}

LL.prototype.show = () => {
    let head = this.head;
    while (head != null) {
        console.log(head.data);
        head = head.next;
    }
}

let ll1 = new LL();

ll1.insertBegnining("b10");
ll1.insertBegnining("b20");
ll1.insertBegnining("b30");
ll1.insertBegnining("b40");
ll1.insertEnd("e10");
ll1.insertEnd("e20");
ll1.insertEnd("e30");
ll1.insertBegnining("b50");
ll1.show();