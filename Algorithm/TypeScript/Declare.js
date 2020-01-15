var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var a = 10;
console.log(a);
var obj = {
    name: "sandeep",
    num: 1
};
obj.name = "hello";
console.log(obj);
//Destructuring        
var input = [1, 2];
var x = input[0], y = input[1];
console.log(x, y);
var _a = [1, 2, 3], a1 = _a[0], a2 = _a[1], a3 = _a[2];
console.log(a1, a2, a3);
//function
function f(_a) {
    var x = _a[0], y = _a[1];
    return x + y;
}
console.log(f([12, 12]));
//function 1
var _b = [1, 2, 3, 4], first = _b[0], rest = _b.slice(1);
console.log(first, rest);
var f1 = [1, 2, 3][0];
console.log(f1);
//tuple
var tup = [2, "green", "blue"];
var b1 = tup[0], b2 = tup.slice(1);
console.log(b1, b2);
var g1 = tup[0];
var g2 = tup[1];
var g3 = tup[2];
console.log(g1, g2, g3);
//Object
var o = {
    p: 'foo',
    q: 12,
    r: 'bar'
};
var p = o.p, q = __rest(o, ["p"]);
console.log(p, q);
//Spread
var fr = [1, 2];
var se = [3, 4];
console.log(__spreadArrays([0], fr, [12], se));
var defaults = {
    food: 'spicy',
    price: '900INR',
    ambiance: 'Noisy'
};
var search = __assign(__assign({}, defaults), { city: "BLR", sex: 'M' });
console.log(search);
