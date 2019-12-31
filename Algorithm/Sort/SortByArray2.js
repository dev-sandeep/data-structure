const heapSort = (arr) => {
    arr = makeFirstHeap(arr);

    let size = arr.length;
    let temp;
    for (let i = size - 1; i > 0; i--) {
        temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        size--;
        makeMaxHeap(arr, 0, size);
    }

    return arr;
}

const makeMaxHeap = (arr, index, heapSize) => {
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    let largest = index;
    if (heapSize > left && arr[left] > arr[largest])
        largest = left;
    if (heapSize > right && arr[right] > arr[largest])
        largest = right;

    let temp;
    if (index != largest) {
        temp = arr[largest];
        arr[largest] = arr[index];
        arr[index] = temp;
    }
}

const makeFirstHeap = (arr) => {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        makeMaxHeap(arr, i, arr.length);
    }

    return arr;
}

const init = (arr, arr1) => {
    arr = heapSort(arr);
    // arr1 = heapSort(arr1);

    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]])
            obj[arr[i]] = 1;
        else
            obj[arr[i]]++;
    }
    
    let ctr, finalArr = [];
    for (let index in arr1) {
        // console.log(arr1[index]);
        ctr = obj[arr1[index]];
        
        while (ctr-- > 0) {
            finalArr.push(arr1[index]);
        }
    }
    console.log(finalArr);
}

init([2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8], [2, 1, 8, 3]);

//0[1,4],[2,5],[9,12],[5,9],[5,12]
//1[1,4]
//2[2,5]
//3[5,9]
//4[5,12]
//5[9,12]

//1,2,3