var arr = [1, 2, 3, 4];

Array.prototype.mapImp = function (fn) {
    for (var i = 0; i < this.length; i++) {
        fn(this[i], i);
    }
}

arr.mapImp(function (val, key) {
    console.log(val, key);
});