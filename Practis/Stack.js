function Stack(array){
    this.array = [];
    if(array)   
        this.array = array;
}

Stack.prototype.isEmpty = function(){
    return this.array.length == 0;
}

Stack.prototype.peek = function(){
    return this.array[this.array.length - 1];
}

Stack.prototype.insert = function(elem){
    this.array.push(elem);
}

Stack.prototype.delete = function(){
    this.array.pop()
}