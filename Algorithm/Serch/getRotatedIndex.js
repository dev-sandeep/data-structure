// https://www.geeksforgeeks.org/find-the-maximum-element-in-an-array-which-is-first-increasing-and-then-decreasing/

const binarySearch = (arr, start, end) => {
    let mid = Math.round((start + end) / 2);

    if (start >= mid || end <= mid)
        return mid;

    if (arr[start] > arr[mid]) {
        end = mid;
    } else if (arr[end] < arr[mid]) {
        start = mid;
    }

    return binarySearch(arr, start, end);
}

const init = (arr) => {
    let res = binarySearch(arr, 0, arr.length - 1);
    console.log(res - 1);
}

init([8, 10, 20, 80, 1, 2, 3]);