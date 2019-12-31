function Stack() {
    this.array = [];
}

Stack.prototype.insert = (data) => {
    this.array.push(data);
}

Stack.prototype.show = () => {
    let arr = this.array;
    
    for (i in arr) {
        console.log(arr[i]);
    }
}

let x = new Stack();
x.insert(10);
x.insert(20);
x.insert(30);
x.insert(40);
x.show();