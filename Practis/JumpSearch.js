/**
 * Jump search
 */

let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
let x = 55;


const main = (arr, x) => {
    let jump = Math.sqrt(arr.length);
    var prev = 0;
    /*  travesrse through the array */
    for (let i = 0; i < arr.length; i += jump) {
        console.log(arr[i]);
        if (arr[i] == x) {
            return x;
        }

        if (arr[i] > x) {
            /* traverse from previous values */
            console.log("prev", x);
            return x;
        }
        prev = x;
    }
}

let res = main(arr, x);
console.log(res);