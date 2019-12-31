/**
 * heap sort goes here
 */

const heapSort = arr => {
    //convert the first array
    arr = makeFirstHeap(arr);

    let size = arr.length;
    let temp;
    for(let i = size - 1; i > 0; i--){
        temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        size--;
        makeMaxHeap(arr, 0, size);
    }

    return arr;
}

const makeFirstHeap = (arr) => {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        makeMaxHeap(arr, i, arr.length);
    }

    return arr;
}

const makeMaxHeap = (arr, index, size) => {
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    let largestNum = index;

    if (size > left && arr[left] > arr[largestNum])
        largestNum = left;

    if (size > right && arr[right] > arr[largestNum])
        largestNum = right;

    let temp;
    /* now swap the largest num */
    if (largestNum != index) {
        temp = arr[largestNum];
        arr[largestNum] = arr[index];
        arr[index] = temp;

        makeMaxHeap(arr, largestNum, size);
    }
}


// const heapSort = arr => {
//     //convert the first array to a heap
//     arr = makeFirstHeap(arr);

//     let size = arr.length;
//     let temp;
//     //take the first number and put it at the back
//     //since after calling makeMaxHeap the (max number) would go at the end
//     for (i = size - 1; i > 0; i--) {
//         let temp = arr[0];
//         arr[0] = arr[i];
//         arr[i] = temp;
//         size--;
//         makeMaxHeap(arr, 0, size);
//     }

//     return arr;
// }

// //this is to convert the array to a heap 
// const makeFirstHeap = arr => {
//     //i = arr.length/2 : because if we go beyond this we might get a parent with no child.
//     for (i = Math.floor(arr.length / 2); i >= 0; i--) {
//         makeMaxHeap(arr, i, arr.length);
//     }

//     return arr;
// }

// const makeMaxHeap = (arr, index, heapSize) => {

//     const left = 2 * index + 1;
//     const right = 2 * index + 2;
//     let largestNum = index;

//     if (heapSize > left && arr[largestNum] < arr[left])
//         largestNum = left;

//     if (heapSize > right && arr[largestNum] < arr[right])
//         largestNum = right;

//     let temp;
//     if (largestNum != index) {
//         temp = arr[largestNum];
//         arr[largestNum] = arr[index];
//         arr[index] = temp;

//         makeMaxHeap(arr, largestNum, heapSize);
//     }
// }

let arr = [30, 40, 50, 35, 45, 10, 60, 70, 80, 100];
let x = heapSort(arr);
console.log(x);

//1,2,6
//1,5