// https://www.geeksforgeeks.org/splitting-numeric-string/

const init = str => {
    str = str.split("");
    if (str.length % 2 != 0)
        str.unshift(0);
    // console.log(">", str);
    let arr = [], temp = str.slice(0);
    //the outer loop is to decide the digits
    for (let i = 1; i <= Math.floor(str.length / 2); i++) {
        arr = [];
        for (let j = 0; j < 4; j += i) {
            // console.log(j, i, temp.splice(j, i));
            //this is where all begins
            arr.push(temp.slice(j, j + i).join(''));
        }
        console.log(arr);
    }
}

let str = '99100';
init(str);

//