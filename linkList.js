/**
 * responsible for implementation of link list
 */

function singlyLinkedListNode(data) {
    this.data = data;
    this.next = null;
}

function singlyLinkedList() {
    this.head = null;
    this.size = 0;
}

singlyLinkedList.prototype.isEmpty = function () {
    return this.size == 0;
}

singlyLinkedList.prototype.insert = function (value) {
    if (this.head == null) {
        this.head = new singlyLinkedList(value);
    } else {
        var temp = this.head;//saving the head
        this.head = new singlyLinkedListNode(value);
        this.head.next = temp;
    }
    this.size++;
}