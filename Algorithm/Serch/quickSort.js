const partition = (arr, start, end) => {
    let pivot = arr[Math.round((start + end) / 2)];
    while (start <= end) {
        /*  finding the last start and end */
        while (arr[start] < pivot)
            start++;

        while (arr[end] > pivot)
            end--;

        if (start <= end) {
            arr = swap(arr, start, end);
            start++;
            end--;
        }
    }

    return start;
}

const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

    return arr;
}

const quickSort = (arr, start, end) => {
    if (arr.length > 1) {
        let index = partition(arr, start, end);
        if (start < index - 1) {
            quickSort(arr, start, index - 1);
        }

        if (end > index) {
            quickSort(arr, index, end);
        }
    }
    return arr;
}

const init = (arr) => {
    let res = quickSort(arr, 0, arr.length - 1);
    console.log(res);
}

init([1, 6, 3, 14, 9, 10, 2]);

// const partition = (arr, start, end) => {
//     let pivot = arr[Math.floor((start + end) / 2)];
//     console.log("pivot", pivot);
//     while (start <= end) {
//         while (arr[start] < pivot)
//             start++;

//         while (arr[end] > pivot)
//             end--;

//         if (start <= end) {
//             swap(arr, start, end);
//             start++;
//             end--;
//         }
//     }

//     return start;
// }

// function partitionx(items, left, right) {
//     var pivot = items[Math.floor((right + left) / 2)], //middle element
//         i = left, //left pointer
//         j = right; //right pointer
//     console.log("pivotx", pivot);
//     while (i <= j) {
//         while (items[i] < pivot) {
//             i++;
//         }
//         while (items[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(items, i, j); //sawpping two elements
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// const swap = (arr, a, b) => {
//     let temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
// }

// const init = (arr) => {
//     let final = arr;
//     let res = partition(arr, 0, arr.length - 1);
//     console.log(res, "xx");
//     res = partitionx(final, 0, final.length - 1);
//     console.log(res);
// }

// init([5, 3, 7, 4, 2, 1]);