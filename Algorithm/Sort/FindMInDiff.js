// https://www.geeksforgeeks.org/find-minimum-difference-pair/

const makeMaxHeap = (arr, i, size) => {
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    let lg = i;
    if (size > l && arr[l] > arr[lg])
        lg = l;
    if (size > r && arr[r] > arr[lg])
        lg = r;

    let tem;
    if (i != lg) {
        tem = arr[i];
        arr[i] = arr[lg];
        arr[lg] = tem;

        makeMaxHeap(arr, lg, size);
    }
}

const makeFirstHeap = (arr) => {
    let mid = Math.floor(arr.length / 2);
    // console.log(arr);
    let size = arr.length;
    for (let i = mid; i >= 0; i--) {
        makeMaxHeap(arr, i, size);
    }

    console.log(arr);
}

let x = makeFirstHeap([1, 2, 3, 4, 5, 16, 7, 8, 14, 10, 11, 12, 13]);
console.log(x);