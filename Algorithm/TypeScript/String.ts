console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

function emp(id: number, name: string) {
    this.id = id;
    this.name = name;
}
let e = new emp(1, "Hello");
emp.prototype.mail = "Allexmclen@mail.com";
e.email = "Beta@mail.com";
console.log(e.mail);

