/**
 * implementation of doubly link list
 */
function doublyLinkListNode(data){
    this.data = data;
    this.next = null;
    this.prev = null;
}

function doublyLinkList(){
    this.head = null;
    this.tail = null;
    this.size = 0;
}

doublyLinkList.prototype.isEmpty = function(){
    return this.size == 0;
}

//insertion at the front of the doubly link list
doublyLinkList.prototype.insertAtFront = function(data){
    if(this.size == 0){//the first dll
        this.head = new doublyLinkListNode(data);
        this.tail = this.head;
    }else{
        var temp = new doublyLinkListNode(data);
        temp.next = this.head;
        this.head.prev = temp;
        this.head = temp;
    }

    this.size++
} 

doublyLinkList.prototype.show = function(){
    var node = this.head;
    var ctr = 0;
    console.log(node.data);
    while(node.next != null){
        node = node.next;
        console.log(node.data);
    }
}

doublyLinkList.prototype.deleteAtHead = function(){
    var temp = this.head;
    this.head = temp.next;
    this.head.prev = null;

    this.size--;
}

doublyLinkList.prototype.deleteByVal = function(value){
    var node = this.head;
    while(node.next != null){
        node = node.next;

        if(node.data == value){
            var prevNode = node.prev;
            var nextNode = node.next;
            prevNode.next = node.next;
            nextNode.prev = prevNode;

            this.size --;
        }
    }
}


var dll1 = new doublyLinkList();
dll1.insertAtFront(1);
dll1.insertAtFront(2);
dll1.insertAtFront(3);
dll1.insertAtFront(4);
dll1.deleteByVal(2);
dll1.show();

