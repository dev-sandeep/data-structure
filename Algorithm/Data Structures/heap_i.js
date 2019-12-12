/**
 * implementation of heap goes here
 * 
 */

function heap() {
    this.items = [];
}

heap.prototype.swap = function (index1, index2) {
    var temp = this.items[index1];
    this.items[index1] = this.items[index2]
    this.items[index2] = temp;
}

heap.prototype.parentIndex = function (index) {
    return Math.floor((index - 1) / 2);
}

heap.prototype.leftChildIndex = function () {
    return index * 2 + 1;
}

heap.prototype.rightChildIndex = function () {
    return index * 2 + 2;
}

heap.prototype.parent = function (index) {
    return this.items[this.parentIndex(index)];
}

heap.prototype.leftChild = function () {
    return this.items[this.leftChildIndex];
}

heap.prototype.rightChild = function () {
    return this.items[this.rightChildIndex];
}

heap.prototype.peek = function () {
    return this.items[0];
}

heap.prototype.size = function(){
    // return this.
}