// https://www.geeksforgeeks.org/find-minimum-element-in-a-sorted-and-rotated-array/
const binarySearch = (arr, start, end) => {
    let pivotIndex = Math.floor((start + end) / 2);
    let pivot = arr[pivotIndex];
    console.log(start, end, "pivot", pivot, pivotIndex);
    if (end - start == 1)
        return arr[end];

    if (arr[start] > pivot) {
        return binarySearch(arr, start, pivotIndex);
    } else if (arr[end] < pivot) {
        return binarySearch(arr, pivotIndex, end);
    }
}
const init = (arr) => {
    console.log(binarySearch(arr, 0, arr.length - 1));
}

init([12, 14, 16, 1, 2, 3, 5, 7, 8]);