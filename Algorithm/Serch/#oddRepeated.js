// https://www.geeksforgeeks.org/find-the-element-that-odd-number-of-times-in-olog-n-time/

const binary = (arr, start, end) => {
    let mid = Math.floor((start + end) / 2);

    console.log(start, end, mid);
    if (start >= end)
        return start;

    //extreme case
    if (arr[mid] != arr[mid + 1] && arr[mid] != arr[mid - 1])
        return mid;

    if (mid % 2 == 0) {
        if (arr[mid] == arr[mid + 1]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    } else {
        if (arr[mid] == arr[mid - 1]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    console.log("--", start, end);
    return binary(arr, start, end);
}

const init = (arr) => {
    let res = binary(arr, 0, arr.length - 1);
    console.log("RES", res);
}

init([1, 1, 2, 1, 1, 2, 2, 13, 13, 1, 1, 40, 40]);