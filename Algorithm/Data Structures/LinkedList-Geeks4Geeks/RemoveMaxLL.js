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
    let n1 = new Node(data);
    n1.next = this.head;
    this.head = n1;
    return this.head;
}

LL.prototype.show = () => {
    let head = this.head;
    while (head != null) {
        console.log(head.data);
        head = head.next;
    }
}

LL.prototype.removeMoreThan = (maxNum) => {

    let prev = this.head;
    let head = this.head;
    let baseHead = this.head;
    let arr = [];
    while (head != null) {
        if (head.data > maxNum)
            arr.push(head.data);

        head = head.next;
    }
    /**
     * bhai sun!!
     * remember to make a seperate function!
     * @param {} data 
     */
    let deleteNode = (data) => {

        if (this.head.data == data) {
            this.head = this.head.next;
        }

        let head = this.head;
        while (head != null) {
            if (head.data == data) {
                prev.next = head.next;
            }

            prev = head;
            head = head.next;
        }
        return this.head;
    }

    for (var index in arr) {
        deleteNode(arr[index]);
    }

    return baseHead;
}

let ll = new LL();
ll.insert(10);
ll.insert(20);
ll.insert(30);
ll.insert(40);
ll.insert(60);
ll.insert(80);
ll.insert(55);
ll.insert(50);
ll.removeMoreThan(30);
ll.show();      