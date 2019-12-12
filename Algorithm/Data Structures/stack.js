/**
 * implementation of Hash Table
 * LIFO - Last in first out
 */

function stack(array) {
    this.array = [];
    if (array) {
        this.array = array;
    }
}

stack.prototype.isEmpty = function () {
    return this.array.length == 0;
}

stack.prototype.push = function (val) {
    this.array.push(val);
}

stack.prototype.peek = function () {
    return this.array[this.array.length - 1];
}

stack.prototype.get = function () {
    return this.array;
}

stack.prototype.pop = function () {
    return this.array.pop();
}

stack.prototype.getBuffer = function () {
    return this.array.slice();
}

stack.prototype.search = function () {
    let arr = this.getBuffer();
    console.log(arr);
}

let st = new stack();
st.push(1);
st.push(9);
st.push(45);
st.pop();
console.log(st.search());
console.log(st.peek());
