/* optional params in function */
function fn1(name: string, id: number, city?: string): void {
    console.log(name, id, city);
}

fn1("sandeep", 1);

/* REST parameter */
function addNum(...arg: number[]): number {
    console.log(arguments.length);
    return 0;
}

addNum(19, 29, 39);

/* defaut params */
function defautParam(num: number = 6): void {
    console.log(num);
}

// function defautParam(str?:string):number{
//     return 1;
// }
defautParam(14);

//lambda function
var foo = (x: number) => 10 + x
console.log(foo(1));