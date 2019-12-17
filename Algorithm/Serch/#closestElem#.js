// https://www.geeksforgeeks.org/kth-smallest-element-in-a-row-wise-and-column-wise-sorted-2d-array-set-1/
// Find k closest elements to a given value
const merge = (arr1, arr2) => {
    let ptr1 = 0, ptr2 = 0, res = [];
    while (ptr1 < arr1.length && ptr2 < arr2.length) {
        if (arr1[ptr1] < arr2[ptr2])
            res.push(arr1[ptr1++]);
        else
            res.push(arr2[ptr2++]);
    }

    let rest1 = arr1.slice(ptr1);
    let rest2 = arr2.slice(ptr2);

    return res.concat(rest1).concat(rest2);
}

const mergeSort = (arr) => {

    if (arr.length < 2)
        return arr;
    let start = 0, end = arr.length - 1;

    let pivotIndex = Math.floor(arr.length / 2);
    let left = arr.slice(start, pivotIndex);
    let right = arr.slice(pivotIndex);
    return merge(mergeSort(left), mergeSort(right));
}

/* closest element to given eleent */
const findElem = (arr, start, end, elem) => {
    let mid = Math.floor((start + end) / 2);

    /* the comparison begins here */
    if (arr[mid] == elem)
        return mid;

    if (start >= end)
        return start;

    if (elem > arr[mid])
        start = mid + 1;
    else if (elem < arr[mid])
        end = mid - 1;

    return findElem(arr, start, end, elem);
}

const init = (arr, elem) => {
    let res = mergeSort(arr);
    console.log(res);
    res = findElem(res, 0, arr.length - 1, elem);
    console.log(res);
}

init([1, 42, 52, 5, 2, 30, 87, 5], 43);