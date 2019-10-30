/**
//  * implementation of HEAP goes here
//  */

 function heap(){
    this.item = [];
 }

 heap.prototype.swap = function(index1, index2){
    var temp = this.item[index2];
    this.item[index2] = this.item[index1];
    this.item[index1] = temp;
}

heap.prototype.parentIndex = function(index){
    return Math.floor((index - 1) / 2);
}

heap.prototype.leftChildIndex = function(index){
    return index*2+1;
}

heap.prototype.rightChildIndex = function(index){
    return index*2+2;
}

heap.prototype.parent = function(){
    return this.item[this.parentIndex]
}

/**
 * implementatiio of minHeap goes here
 */
function minHeap (){
    this.items = [];
}

minHeap.prototype = Object.create(heap.prototype);

minHeap.prototype.add = function(item){
    this.items[item.length] = item;
    this.bubbleUp();   
}

minHeap.prototype.poll = function(){
    var items = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();

    return items;
}

minHeap.prototype.bubbleDown = function(){
    var index = 0;
    // while(this.leftChildIndex)
}





