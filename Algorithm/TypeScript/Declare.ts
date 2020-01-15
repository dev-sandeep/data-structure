let a: number = 10;
console.log(a);

const obj = {
    name: "sandeep",
    num: 1
}

obj.name = "hello";
console.log(obj);

//Destructuring        
let input = [1, 2];
let [x, y] = input;
console.log(x, y);

let [a1, a2, a3] = [1, 2, 3];
console.log(a1, a2, a3);

//function
function f([x, y]: [number, number]) {
    return x + y;
}

console.log(f([12, 12]));

//function 1
let [first, ...rest] = [1, 2, 3, 4];
console.log(first, rest);

let [f1] = [1, 2, 3]
console.log(f1);

//tuple
let tup: [number, string, string] = [2, "green", "blue"];
let [b1, ...b2] = tup;
console.log(b1, b2);

let [g1] = tup;
let [, g2] = tup;
let [, , g3] = tup;
console.log(g1, g2, g3);

//Object
let o = {
    p: 'foo',
    q: 12,
    r: 'bar'
}

let { p, ...q } = o;
console.log(p, q);

//Spread
let fr = [1, 2];
let se = [3, 4];
console.log([0, ...fr, 12, ...se]);

let defaults = {
    food: 'spicy',
    price: '900INR',
    ambiance: 'Noisy'
}
let search = {
    ...defaults,
    city: "BLR",
    sex: 'M'
}
console.log(search);

class C {
    p = 12;
    m() {
        console.log("m");
    }
}
