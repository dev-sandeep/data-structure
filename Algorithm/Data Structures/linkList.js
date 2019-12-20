class LinkedList {
    constructor() {
        this.head = null;
    }
}

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

LinkedList.prototype.insertBegining = function (data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;

    return this.head;
}

LinkedList.prototype.insertAtEnd = function (data) {
    let head = this.head, tail = null;
    //traverse till the end
    while (head != null) {
        if (head.next == null) {
            tail = head;
        }
        head = head.next;
    }
    //now insert the element
    let node = new Node(data);
    tail.next = node;

    return this.head;
}


LinkedList.prototype.show = function () {
    let head = this.head;
    while (head != null) {
        console.log(head.data);
        head = head.next;
    }
}

LinkedList.prototype.deleteByValue = function (val = null) {
    if (val == null) {
        //delete the first node 
        this.head = this.head.next;
    }

    // search and delete the value
    let prev = this.head;
    let presentNode = this.head.next;
    let nodeToBeDeleted, nodeToBeDeletedPrev;
    while (presentNode !== null) {
        if (presentNode.data == val) {
            //this is the node to be deleted
            nodeToBeDeleted = presentNode;
            nodeToBeDeletedPrev = prev;
        }
        prev = presentNode
        presentNode = presentNode.next;
    }

    nodeToBeDeletedPrev.next = nodeToBeDeleted.next;
    return this.head;
}

LinkedList.prototype.deleteByLocation = function (position = 1) {
    if (position == 1) {
        //delete the first element
        this.head = this.head.next;
        return this.head;
    }

    let ctr = 2;
    let head = this.head.next;
    var prevToBeDeletedNode = null, toBeDeletedNode = null, prev = this.head;
    while (head != null) {
        if (ctr == position) {
            prevToBeDeletedNode = prev;
            toBeDeletedNode = head;
        }
        
        prev = head;
        ctr++;
        head = head.next;
    }

    //delete the node
    prevToBeDeletedNode.next = toBeDeletedNode.next;

    return this.head;
}

LinkedList.prototype.deleteOnMaxValue = function (maxValue) {
    //check for the first value
    if (this.head.data > maxValue) {
        //delete the node
        this.deleteByLocation(1);
        // return this.head;
    }

    let head = this.head.next;
    let prev = this.head;
    while (head != null) {
        if(head.data > maxValue){
            this.deleteByValue(head.data);
        }

        prev = head;
        head = head.next;
    }

    return this.head;
}

LinkedList.prototype.deleteByMaxVal = function(maxVal){
    //case for the first val
    let toBeDeletedArr = [];
    if(this.head.data > maxVal){
        toBeDeletedArr.push(this.head);
    }
    
    let head = this.head;
    let prev = head;
    
    while(head != null){
        if(head.data > parseInt(maxVal)){
            toBeDeletedArr.push(head);
        }
        
        prev = head;
        head = head.next;
    }

    console.log(head);
}

var ll = new LinkedList();

// To insert in the linked list
ll.insertBegining(10);
ll.insertBegining(11);
ll.insertBegining(12);
ll.insertBegining(13);
ll.insertBegining(14);
ll.insertBegining(15);
ll.insertBegining(16);
// ll.show();

//To insert at the end of the linked list
// ll.insertAtEnd(14);
// ll.insertAtEnd(15);

//To delete from a linkedlist by value
// ll.deleteByValue(10);

//To delete from a linked list based on the passes position
// ll.deleteByLocation(4);

ll.deleteByMaxVal(12);
// ll.show();