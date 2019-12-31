// https://www.geeksforgeeks.org/minimum-swap-required-convert-binary-tree-binary-search-tree/

//heap sort
const makeMaxHeap = (arr, i, size) => {
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    let largest = i;
    if (size > left && arr[left] > arr[largest])
        largest = left;
    if (size > right && arr[right] > arr[largest])
        largest = right;

    let temp;
    if (largest != i) {
        temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        size--;

        makeMaxHeap(arr, largest);
    }
}

const makeFirstHeap = arr => {
    let mid = Math.floor(arr.length / 2);
    for (let i = mid; i >= 0; i--) {
        makeMaxHeap(arr, i, arr.length);
    }
    return arr;
}

const heapSort = arr => {
    arr = makeFirstHeap(arr);
    let size = arr.length;
    let temp;
    
    for (let i = size - 1; i > 0; i --) {
        temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        size--;    
        makeMaxHeap(arr, 0, size);
    }

    return arr;
}

const init = arr => {

}

let x = heapSort([5, 6, 9, 8, 7, 100, 11]);
console.log(x);