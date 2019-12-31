// https://www.hackerrank.com/challenges/icecream-parlor/problem

let binary = (arr, l, h, x) => {
    let mid = Math.floor((l + h) / 2);

    if (l >= h)
        return -1;

    if (arr[mid] == x)
        return mid;

    if (x < arr[mid]) {
        h = mid - 1;
    }
    if (x > arr[mid])
        l = mid + 1;

    return binary(arr, l, h, x);
}

const init = (arr, sum) => {
    let a, b;
    for (let i = 0; i < arr.length; i++) {
        a = arr[i];
        for (let j = i+1; j < arr.length; j++) {
            b = arr[j];
            if ((a + b) == sum)
                return { i: i+1, j:j+1 }
        }
    }
}

let x = init([1, 4, 5, 3, 2], 4);
let y = init([2, 2, 4, 3], 4);
console.log(x, y);