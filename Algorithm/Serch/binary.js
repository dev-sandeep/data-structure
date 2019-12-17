/**
 * binary search
 */

const binarySearch = (arr, start, end, search) => {
    mid = Math.round((start + end) / 2);
    if (arr[mid] == search)
        return mid;
    if (start > end)
        return -1;

    if (search > arr[mid])
        start = mid + 1;
    else
        end = mid - 1;

    return binarySearch(arr, start, end, search);
}

const init = (arr, search) => {
    let res = binarySearch(arr, 0, arr.length - 1, search);
    console.log(res);
}

init([11, 2, 3, 12, 14, 16, 18, 21, 24, 26, 30, 89, 90], 2);