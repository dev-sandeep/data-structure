// https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/

const init = (arr1, arr2) => {
    let ptr1 = 0, ptr2 = 0;
    let res = [];
    while (ptr1 < arr1.length && ptr2 < arr2.length) {
        if (arr1[ptr1] < arr2[ptr2]) {
            res.push(arr1[ptr1++]);
        } else {
            res.push(arr2[ptr2++]);
        }
    }

    let remain1 = arr1.slice(ptr1);
    let remain2 = arr2.slice(ptr2);

    res = res.concat(remain1).concat(remain2);
    let median = res[Math.floor(res.length / 2)];
    console.log(res);
    console.log(median);
}

init([1, 2, 4], [4, 6, 8, 9, 10]);