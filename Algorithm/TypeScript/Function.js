/* optional params in function */
function fn1(name, id, city) {
    console.log(name, id, city);
}
fn1("sandeep", 1);
/* REST parameter */
function addNum() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    console.log(arguments.length);
    return 0;
}
addNum(19, 29, 39);
/* defaut params */
function defautParam(num) {
    if (num === void 0) { num = 6; }
    console.log(num);
}
// function defautParam(str?:string):number{
//     return 1;
// }
defautParam(14);
//lambda function
var foo = function (x) { return 10 + x; };
console.log(foo(1));
