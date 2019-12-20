// https://www.geeksforgeeks.org/heap-sort/

const heapify = (arr, n, i) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = left + 1;

    if (arr[left] > arr[right])
        largest = left;

    if (arr[right] > arr[left])
        largest = right;

    if (largest != i) {
        arr = swap(arr, largest, i);
        heapify(arr, length, largest);
    }

}

const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
}

const heapSort = (arr) => {
    let length = arr.length;
    let i = Math.floor(length / 2 - 1);
    let k = length - 1;
}

const init = (arr) => {
    let n = arr.length;
    heapSort(arr, n);
}

init([12, 11, 13, 5, 6, 7]);