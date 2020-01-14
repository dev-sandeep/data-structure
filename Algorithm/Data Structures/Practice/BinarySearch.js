const search = (arr, l, h, x) => {
    let mid = Math.floor((l + h) / 2);
    
    if(l > h)
        return -1;

    if (arr[mid] == x)
        return mid;

    if (x < arr[mid])
        h = mid - 1;
    else if (x > arr[mid])
        l = mid + 1;

    return search(arr, l, h, x);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 7, 9];
let x = search(arr, 0, arr.length - 1, 7);
console.log(x);