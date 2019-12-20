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

LL.prototype.insertAtBeginning = (data) => {
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

LL.prototype.getNthFromLastNode = (n) => {
    let ctr = 0, prevCtr = ctr - n, desiredHead = null;
    console.log(prevCtr);
    let head = this.head;
    let prevHead = this.head;
    if(n == 0){
        console.log(null);
        return;
    }
    while (head != null) {
        if (prevCtr++ >= 0) {
            prevHead = prevHead.next;
        }
        head = head.next;
    }
    console.log(prevHead.data);
}

LL.prototype.getMid = ()=>{
    let pt1 = 0, pt2 = null;
    let head = this.head;
    let desHead = this.head;
    while(head != null){
        if(pt1%2 != 0){
            desHead = desHead.next;
        }
        pt1++;
        // console.log(pt1);
        head = head.next;
    }
    console.log(desHead.data);
    console.log(desHead);
}

let L1 = new LL();

L1.insertAtBeginning(7);
L1.insertAtBeginning(6);
L1.insertAtBeginning(5);
L1.insertAtBeginning(4);
L1.insertAtBeginning(3);
L1.insertAtBeginning(2);
L1.insertAtBeginning(1);
L1.getMid();
// console.log(L1.getNthFromLastNode(1));