// https://www.geeksforgeeks.org/convert-an-array-to-reduced-form-set-1-simple-and-hashing/
const makeMaxHeap = (arr, i, size) => {
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    let lg = i;
    if (size > l && arr[l] > arr[lg]) {
        lg = l;
    }

    if (size > r && arr[r] > arr[lg]) {
        lg = r;
    }

    let tm;
    if (i != lg) {
        tm = arr[lg];
        arr[lg] = arr[i];
        arr[i] = tm;

        makeMaxHeap(arr, lg, size);
    }
}

let makeFirstHeap = (arr) => {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        makeMaxHeap(arr, i, arr.length);
    }

    return arr;
}

const heapSort = (arr) => {
    arr = makeFirstHeap(arr);
    let tm, size = arr.length;
    for (let i = size - 1; i > 0; i--) {
        //swap
        tm = arr[0];
        arr[0] = arr[i];
        arr[i] = tm;
        size--;

        makeMaxHeap(arr, 0, size);
    }
    return (arr);
}

const init = arr => {
    let tArr = arr.slice(0);
    heapSort(tArr);
    let obj = {};
    for (let i = 0; i < tArr.length; i++)
        obj[tArr[i]] = i;

    let final = [];
    for (let i in arr)
        final.push(obj[arr[i]]);
    console.log(final);
}

var x = [5, 10, 40, 30, 20];
init(x);