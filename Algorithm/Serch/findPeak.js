const binary = (arr, start, end) => {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1])
        return mid;

    if (start >= end)
        return start;

    if (mid > 0 && arr[mid] < arr[mid - 1]) {
        end = mid - 1;
    } else if (arr[mid] < arr[mid + 1]) {
        start = mid + 1;
    }

    return binary(arr, start, end);
}

const init = (arr) => {
    let res = binary(arr, 0, arr.length - 1);
    console.log(res);
}

init([10, 2, 15, 26, 23, 90, 67]);