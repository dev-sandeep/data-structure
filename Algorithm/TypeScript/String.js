console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
// function employee(id:number,name:string) { 
//     this.id = id 
//     this.name = name 
//  } 
//  var emp = new employee(123,"Smith") 
//  employee.prototype.email = "smith@abc.com" 
//  console.log("Employee 's Id: "+emp.id) 
//  console.log("Employee's name: "+emp.name) 
function emp(id, name) {
    this.id = id;
    this.name = name;
}
var e = new emp(1, "Hello");
emp.prototype.mail = "Allexmclen@mail.com";
e.email = "Beta@mail.com";
console.log(e.mail);
