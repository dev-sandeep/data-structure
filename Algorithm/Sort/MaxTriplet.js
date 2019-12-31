// https://www.geeksforgeeks.org/find-maximum-product-of-a-triplet-in-array/

const merge = (a1, a2) => {
    let p1 = 0, p2 = 0;
    let final = [];
    while (p1 < a1.length && p2 < a2.length) {
        if (a1[p1] < a2[p2])
            final.push(a1[p1++]);
        else
            final.push(a2[p2++]);
    }

    let rem1 = a1.slice(p1);
    let rem2 = a2.slice(p2);

    return final.concat(rem1).concat(rem2);
}

const mergeSort = (arr) => {
    // let l = 0, h = arr.length - 1;
    if (arr.length < 2)
        return arr;

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

const init = (arr) => {
    arr = mergeSort(arr);
    let size = arr.length;
    let ctr = arr.length - 1;
    let max = arr.length - 1 - 3;
    let prod = 1;

    if ((arr[0] > 0 && arr[size - 1] > 0) || (arr[0] < 0 && arr[size - 1] < 0)) {
        while (ctr > max) {
            prod *= (arr[ctr]);
            ctr--;
        }
    } else {
        if (arr.length > 3) {
            if (arr[0] && arr[1])
                prod = arr[0] * arr[1] * arr[size - 1];
            else if (arr[0] < 0 && arr[1] > 0)
                prod = arr[size - 1] * arr[size - 2] * arr[size - 3]
        }
    }

    console.log(prod);
}

init([1, -4, 3, -6, 7, 0]); 