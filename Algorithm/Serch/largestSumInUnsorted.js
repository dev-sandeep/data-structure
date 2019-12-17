// https://www.geeksforgeeks.org/find-the-largest-pair-sum-in-an-unsorted-array/
const merge = (arr1, arr2) => {
    let p1 = 0, p2 = 0;
    let newArr = [];
    while (p1 < arr1.length && p2 < arr1.length) {
        if (arr1[p1] < arr2[p2])
            newArr.push(arr1[p1++]);
        else
            newArr.push(arr2[p2++]);
    }

    let remain1 = arr1.slice(p1);
    let remain2 = arr2.slice(p2);

    return newArr.concat(remain1).concat(remain2);
}

const mergeSort = (arr) => {
    if (arr.length < 2)
        return arr;

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

const init = (arr) => {
    let res = mergeSort(arr);
    console.log(res[arr.length - 1] + res[arr.length - 2]);
}

init([12, 34, 10, 6, 40]);