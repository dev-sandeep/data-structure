function singlyLLNode(data){
    this.data = data;
    this.next = null;
}

function singlyLL(){
    this.head = null;
    this.size = 0;
}

singlyLL.prototype.isEmpty = function(){
    return this.size == 0;
}

singlyLL.prototype.insert = function(value){
    if(this.head == null){
        this.head = new singlyLLNode(value);
    }else{
        var temp = this.head;
        this.head = new singlyLLNode(value);
        this.head.next = temp;
    }
    this.size++;
}