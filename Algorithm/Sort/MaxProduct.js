// https://www.geeksforgeeks.org/find-pair-with-greatest-product-in-array/

//[10, 3, 5, 30, 35
//[3, 5, 10, 30, 35]

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

const init = arr => {
    arr = mergeSort(arr);

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < arr.length; j++) {
            
        }
    }
    // let l = 0, h = arr.length - 1;
    // while (h < Math.floor(h / 4)) {
    //     let val = arr[h];
    //     let v1 = arr[l];
    //     if ((val % v1 != 0) || (v1 > val)) {
    //         l1++;
    //         continue;
    //     } else {
    //         let v2 = val / v1;
    //         //search l2 now
    //         let x = arr.indexof(v2);
    //         if (x != -1)
    //             return { v1, v2 }

    //         h--;
    //         l1 = 0;
    //     }
    // }
}

console.log(init([10, 3, 5, 30, 35]));