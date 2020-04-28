let arr = [1, 2, 3, 5, 6, 8, 10];
let search = 2;

const biarySearch = (arr, l, h, x) => {
    let mid = Math.floor((l + h) / 2);

    if (arr[mid] == x)
        return mid;

    if (l > h)
        return -1;

    if (x < arr[mid])
        h = mid - 1;
    else
        l = mid + 1;

    return biarySearch(arr, l, h, x);
}

let x = biarySearch(arr, 0, arr.length - 1, search);
console.log(x);