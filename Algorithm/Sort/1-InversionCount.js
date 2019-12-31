// https://www.geeksforgeeks.org/number-swaps-sort-adjacent-swapping-allowed/
var ctr = 0;
var rctr = 0;
const merge = (left, right) => {
    let pt1 = 0, pt2 = 0;
    let newArr = [];
    while (pt1 < left.length && pt2 < right.length) {
        if (left[pt1] < right[pt2]) {
            newArr.push(left[pt1++]);
            ctr++;
        }
        else {
            newArr.push(right[pt2++]);
            rctr++;
        }
    }

    let rem1 = left.slice(pt1);
    let rem2 = right.slice(pt2);

    return newArr.concat(rem1).concat(rem2);
}

const mergeSort = arr => {
    if (arr.length < 2)
        return arr;

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    // console.log(left, right);
    return merge(mergeSort(left), mergeSort(right));
}

const init = (arr) => {
    arr = mergeSort(arr);
    console.log(ctr, rctr);
}
let x = [3, 2, 1];
init(x)