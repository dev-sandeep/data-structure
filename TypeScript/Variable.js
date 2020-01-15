var isDone = true;
console.log(isDone);
var list = [1, 2];
console.log(list);
var tupple;
tupple = ["sandeep", 1];
console.log(tupple[0]);
var color;
(function (color) {
    color[color["Red"] = 1] = "Red";
    color[color["Green"] = 2] = "Green";
    color["Blue"] = "alpha";
    color[color["pink"] = 3] = "pink";
})(color || (color = {}));
var c = color.Blue;
console.log(c);
var notSure = 5;
notSure = "Not Sure";
console.log(notSure);
function checkFn() {
    console.log("Hello");
}
function checkFn1() {
    return 10;
}
checkFn();
console.log(checkFn1());
var u = undefined;
console.log(u);
var str = "Hello World";
var strLength = str.length;
console.log(strLength);
