// https://www.geeksforgeeks.org/check-reversing-sub-array-make-array-sorted/
const merge = (ar1, ar2) => {
    let p1 = 0, p2 = 0, final = [];
    while (p1 < ar1.length && p2 < ar2.length) {
        if (ar1[p1] < ar2[p2])
            final.push(ar1[p1++]);
        else
            final.push(ar2[p2++]);
    }

    let rem1 = ar1.slice(p1);
    let rem2 = ar2.slice(p2);

    return final.concat(rem1).concat(rem2);
}

const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}


const init = (arr) => {
    let x = arr;
    x = mergeSort(x);
    // console.log(x, arr);

    let start = 0, end = 0;
    // console.log(arr, x);
    for (var i in arr) {
        // console.log(x[i], arr[i]);
        if (x[i] != arr[i]) {
            if (!start)
                start = arr[i];
            else
                end = arr[i];
        }
    }

    console.log(start, end);
}

init([1, 2, 5, 4, 3]);