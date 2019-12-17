// https://www.geeksforgeeks.org/find-the-element-that-appears-once-in-a-sorted-array/

const binary = (arr, start, end) => {
    let mid = Math.floor((start + end) / 2);

    if (start == end)
        return start;

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

    return binary(arr, start, end);
}

const init = (arr) => {
    let res = binary(arr, 0, arr.length - 1);
    console.log(res);
}

init([1, 1, 2, 2, 1, 1, 2, 13, 13, 1, 1, 40, 40]);