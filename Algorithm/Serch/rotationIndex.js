const getRotationIndex = (arr, start, end) => {
    let mid = Math.floor((start + end) / 2);

    if (start >= end || end-start == 1)
        return end;

    if (arr[mid] < arr[start]) {
        end = mid;
    } else if (arr[mid] > arr[end]) {
        start = mid;
    }
    console.log(start, end);
    return getRotationIndex(arr, start, end);
}

const init = (arr) => {
    let res = getRotationIndex(arr, 0, arr.length - 1);
    console.log(res);
}

init([5, 6, 7, 1, 2, 3, 4]);