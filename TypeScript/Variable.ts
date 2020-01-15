let isDone: boolean = true;
console.log(isDone);

let list: number[] = [1, 2];
console.log(list);

let tupple: [string, number];
tupple = ["sandeep", 1];
console.log(tupple[0]);

enum color { Red = 1, Green = 2, Blue = "alpha", pink = 3 }
let c: color = color.Blue;
console.log(c);

let notSure: any = 5;
notSure = "Not Sure"
console.log(notSure);

function checkFn(): void {
    console.log("Hello");
}

function checkFn1(): number {
    return 10;
}
checkFn();
console.log(checkFn1());

let u: undefined = undefined;
console.log(u);

let str: any = "Hello World";
let strLength: number = (str as string).length;
console.log(strLength);

