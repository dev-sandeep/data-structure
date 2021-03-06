/**
 * sorting with the help of merge sort
 */
const merge = (leftArr, rightArr) => {
    let leftPtr = 0, rightPtr = 0;
    let newArr = [];
    while (leftPtr < leftArr.length && rightPtr < rightArr.length) {
        if (leftArr[leftPtr] < rightArr[rightPtr]) {
            newArr.push(leftArr[leftPtr++]);
        } else {
            newArr.push(rightArr[rightPtr++]);
        }
    }

    let remainLeft = leftArr.slice(leftPtr);
    let remainRight = rightArr.slice(rightPtr);

    return newArr.concat(remainLeft).concat(remainRight);
}

const mergeSort = (arr) => {
    if (arr.length < 2)
        return arr;

    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const init = (arr) => {
    let res = mergeSort(arr);
    console.log(res);
}

// init([10, 1, 3, 2, 4, 6, 5, 9, 8, 7]);
init([2, 4, 1, 3, 5 ]);

// var unsortedArr = [10, 1, 3, 2, 4, 6, 5, 9, 8, 7];

// function merge(arr1, arr2) {
//     let result = [], left = 0, right = 0;

//     while (left < arr1.length && right < arr2.length) {
//         if (arr1[left] < arr2[right]) {
//             result.push(arr1[left++]);
//         } else {
//             result.push(arr2[right++]);
//         }
//     }
//     let leftRemains = arr1.slice(left);
//     let rightRemains = arr2.slice(right);
//     result = result.concat(leftRemains).concat(rightRemains);
//     return result;
// }


// function mergeSort(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }

//     let mid = Math.floor((arr.length) / 2),
//         leftArr = arr.slice(0, mid),
//         rightArr = arr.slice(mid);

//     return merge(mergeSort(leftArr), mergeSort(rightArr));
// }

// console.log(mergeSort(unsortedArr));