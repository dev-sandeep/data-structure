const merge = (ar1, ar2) => {
    let p1 = 0, p2 = 0, newArr = [];
    while (p1 < ar1.length && p2 < ar2.length) {
        if (ar1[p1] < ar2[p2]) {
            newArr.push(ar1[p1++]);
        } else {
            newArr.push(ar2[p2++]);
        }
    }

    let rem1 = ar1.slice(p1);
    let rem2 = ar2.slice(p2);

    return newArr.concat(rem1).concat(rem2);
}

const mergeSort = (arr) => {
    if (arr.length < 2)
        return arr;

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}
///////////////


const init = (arr) => {
    let res = new Array(3);
    res[0] = res[1] = res[2] = arr[0];
    for (var index in arr) {
        if (arr[index] > res[0]) {
            res[2] = res[1];
            res[1] = res[0];
            res[0] = arr[index];
        }
        else if (arr[index] > res[1]) {
            res[2] = res[1];
            res[1] = arr[index];
        } else if (arr[index] > res[2]) {
            res[2] = arr[index];
        }
    }
    console.log(res);
}

init([10, 4, 3, 50, 23, 90]);