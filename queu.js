/**
 * implementation of Hash Table
 * LIFO - Last in first out
 */

function queu(array) {
    this.array = [];
    if (array) {
        this.array = array;
    }
}

queu.prototype.isEmpty = function () {
    return this.array.length == 0;
}

queu.prototype.enque = function (val) {
    this.array.push(val);
}

queu.prototype.peek = function () {
    return this.array[0];
}

queu.prototype.get = function () {
    return this.array;
}

queu.prototype.delete = function(){
    return this.array.pop();
}

queu.prototype.deque = function(){
    return this.array.shift()
}

let st = new queu();
st.enque(1);
st.enque(9);
st.enque(45);
st.deque();
console.log(st);

