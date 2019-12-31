
const maxHeap = (arr, index, heapSize) => {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;

    if (heapSize > left && arr[left] > arr[largest])
        largest = left;

    if (heapSize > right && arr[right] > arr[largest])
        largest = right;

    let temp;
    if (largest != index) {
        temp = arr[largest];
        arr[largest] = arr[index];
        arr[index] = temp;

        maxHeap(arr, largest, heapSize);
    }
}

const makeFirstHeap = (arr) => {
    let size = arr.length;
    for (let i = Math.floor(size / 2); i >= 0; i--) {
        maxHeap(arr, i, size);
    }

    return arr;
}

const heapSort = (arr) => {
    arr = makeFirstHeap(arr);
    let size = arr.length;
    //final swaping for putting the larest elemnt at the back 
    let temp;
    for (let i = size - 1; i > 0; i--) {
        temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        size--;

        maxHeap(arr, 0, size);
    }
    return arr;
}

const init = (ar1, ar2) => {
    ar1 = heapSort(ar1);
    ar2 = heapSort(ar2);
    
    // while (pt1 < ar1.length && pt2 < ar2.length) {
    //     if (Math.pow(ar1[pt1], ar2[pt2]) > Math.pow(ar2[pt2], ar1[pt1])) {
    //         console.log(ar1[pt1], ar2[pt2]);
    //     } else if (Math.pow(ar1[pt1], ar2[pt2]) < Math.pow(ar2[pt2], ar1[pt1])) {
    //         console.log(ar1[pt2], ar2[pt1]);    
    //     }
    // }
    for (let i = 0; i < ar1.length; i++) {
        for (let j = 0; j < ar2.length; j++) {
            if (Math.pow(ar1[i], ar2[j]) > Math.pow(ar2[j], ar1[i])) {
                console.log(ar1[i], ar2[j]);
            } else if (Math.pow(ar1[i], ar2[j]) < Math.pow(ar2[j], ar1[i])) {
                console.log(ar1[j], ar2[i]);
            }
        }
    }

}

init([2, 1, 6], [1, 5]);

//1,2,6
//1,5