const merge = (a1, a2) => {
    let p1 = 0, p2 = 0, arr = [];
    while (p1 < a1.length && p2 < a2.length) {
        if (a1[p1] < a2[p2])
            arr.push(a1[p1++]);
        else
            arr.push(a2[p2++]);
    }

    let rem1 = a1.slice(p1);
    let rem2 = a2.slice(p2);

    return arr.concat(rem1).concat(rem2);
}

const mergeSort = (arr) => {
    if (arr.length < 2)
        return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

const binary = (arr, l, h, x) => {
    console.log(l, "||", h);
    if (l >= h) {

        return Math.abs(arr[h] - x) < Math.abs(arr[l] - x) ? h : l;
    }


    let mid = Math.floor((l + h) / 2);
    if (arr[mid] == x) {
        return mid
    } else if (x < arr[mid])
        h = mid - 1;
    else if (x > arr[mid])
        l = mid + 1;

    return binary(arr, l, h, x);
}

const init = (arr) => {
    for (var i in arr[0]) {
        arr[i] = mergeSort(arr[i]);
    }

    let min = 0;
    var i = 0, j = 0, k = 0;
    while (i < arr[0].length || j < arr[0].length || k < arr[0].length) {

    }
    // let min = 0, diff, final = [];
    // for (var i = 1; i < arr.length - 1; i++) {
    //     diff = arr[i + 1] - arr[i] - arr[i - 1];
    //     if (diff < min) {
    //         final = [arr[i - 1], arr[i], arr[i + 1]];
    //         min = diff;
    //         console.log(diff, final);
    //     }
    // }

    // console.log(min, final);

}

// init([[5, 2, 8], [10, 7, 12], [9, 14, 6]]);
let x = binary([7, 10, 11, 15], 0, 3, 9);
console.log(x);