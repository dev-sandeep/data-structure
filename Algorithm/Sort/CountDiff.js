const makeMaxHeap = (arr, index, heapSize) => {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;
    let size = arr.length;

    if (heapSize > left && arr[left] > arr[largest])
        largest = left;
    if (heapSize > right && arr[right] > arr[largest])
        largest = right;

    let temp;
    if (largest != index) {
        temp = arr[largest];
        arr[largest] = arr[index];
        arr[index] = temp;
        size--;
        makeMaxHeap(arr, largest, size);
    }
}

const makeFirstHeap = (arr) => {
    for (i = Math.floor(arr.length / 2); i >= 0; i--) {
        makeMaxHeap(arr, i, arr.length);
    }

    return arr;
}

const heapSort = arr => {
    arr = makeFirstHeap(arr, 0, arr.length);
    let size = arr.length, final = [];
    final.push(arr[0] || 0);
    for (let i = size - 1; i > 0; i--) {
        arr = makeFirstHeap(arr, 0, arr.length);
        arr = arr.slice(1);
        final.push(arr[0]);
    }
    return final;
}

const binarySearch = (arr, l, h, x) => {

    let mid = Math.floor((l + h) / 2);

    if (l > h)
        return -1;

    if (arr[mid] == x)
        return mid;

    if (x < arr[mid])
        h = mid - 1;
    else if (x > arr[mid])
        l = mid + 1;

    return binarySearch(arr, l, h, x);
}

let arr = [1, 5, 3, 4, 2];
const init = (arr, k) => {
    arr = (arr).sort();
    let x, y;
    for (let i = arr.length - 1; i >= 0; i--) {
        x = arr[i];
        y = x - k;

        if (y <= 0)
            continue;
        // console.log("search", x, y, arr);
        let search = binarySearch(arr, 0, arr.length - 1, y);
       
        if (search != -1) {
            console.log(x, y);
        }
    }
}



init(arr, 3);