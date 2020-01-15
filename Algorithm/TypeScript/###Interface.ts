interface Person {
    name: string,
    mail: string,
    id?: number | string
}

var customer: Person = {
    name: 'sandeep',
    mail: 'allex@mail.com',
    id: 'naik',
    // lname: 'Jelo'
}

console.log(customer);

interface Arr {
    [index: number]: string
}

var emp: Arr = ['sandeep', 'sapna']
console.log(emp);

///////////
// interface ages { 
//     [index:string]:number 
//  } 

//  var agelist:ages[]; 

//  agelist["John"] = 15;   // Ok 
// //  agelist[2] = "nine"   // Error
// console.log(agelist);

interface em {
    [index: number]: {
        id: number,
        name: string
    }
}

var e1: em = [
    {
        id: 1,
        name: 'sandeep'
    }
]

console.log(e1);

///////////////////////////
interface em1 {
    id: number,
    name: string
}

interface em2 extends Array<em1> { }

var ex: em2;
ex = [
    {
        id: 1,
        name: 'jello'
    }
]
console.log(ex);