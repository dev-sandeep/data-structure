/**
 * Interface Array 
 */

interface Emp {
    id: number,
    name: string,
    isPresent: boolean
}

interface EmpArray extends Array<Emp> { }

let exmp: Object;
exmp = {
    id: 1,
    name: 'sandeep',
    isPresent: true
}

console.log(exmp);

let exmpArr: EmpArray = [];
exmpArr.push({ id: 1, name: 'sandeep', isPresent: true });
exmpArr.push({ id: 2, name: 'sapna', isPresent: true });
console.log(exmpArr);

