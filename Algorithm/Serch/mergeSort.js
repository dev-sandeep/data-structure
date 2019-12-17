const merge = (a1, a2) => {
    let pt1 = 0, pt2 = 0;
    let res = [];
    // console.log(a1, a2, "merge");
    while (pt1 < a1.length && pt2 < a2.length) {
        if (a1[pt1] < a2[pt2]) {
            res.push(a1[pt1++]);
        } else {
            res.push(a2[pt2++]);
        }
    }

    let rem1 = a1.slice(pt1);
    let rem2 = a2.slice(pt2);
    res = res.concat(rem1).concat(rem2);
    console.log(res);
    return res;
}

const mergeSort = (arr) => {
    if (arr.length < 2)
        return arr;

    let mid = Math.floor((arr.length) / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
    // console.log(leftArr, rightArr, arr);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const init = (arr) => {
    let res = mergeSort(arr);
    console.log(res);
}

init([7, 10, 4, 3, 20, 15]);