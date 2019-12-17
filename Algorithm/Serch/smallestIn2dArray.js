// https://www.geeksforgeeks.org/kth-smallest-element-in-a-row-wise-and-column-wise-sorted-2d-array-set-1/

const mergeArray = (arr1, arr2) => {
    let ptr1 = 0, ptr2 = 0, res = [];

    if (!arr2)
        return arr1;
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

const init = (arr) => {
    let res = [];
    for (i = 0; i < arr.length; i++) {
        let mergedArr = mergeArray(arr[i], res);
        res = mergedArr;
    }
    console.log(res);
}

init([[10, 20, 30, 40],
[15, 25, 35, 45],
[25, 29, 37, 48],
[32, 33, 39, 50]]);