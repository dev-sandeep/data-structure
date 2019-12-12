/**
 * Selection sort goes here
 * [some errors are there]
 * @todo: try again later
 */

// var unsortedArr = [10, 1, 3, 2, 4, 6, 5, 9, 8, 7];
var unsortedArr = [5, 3, 7, 6, 2, 9];

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = temp;

    return arr;
}

function quickSortHelper(arr, left, right) {
    console.log(arguments);
    var pivot = arr[Math.floor(right + left) / 2];
    while (left <= right) {
        while (pivot > arr[left]) {
            left++;
        }

        while (pivot < arr[right]) {
            right--;
        }

        if (left <= right) {
            arr = swap(left, right);
            left++;
            right--;
        }
    }

    return left;
}

function quickSort(arr, left, right) {
    var index;
    if (arr.length > 1) {
        index = quickSortHelper(arr, left, right);
        console.log("INDX", index);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }

        if (index < right) {
            quickSort(arr, index, right);
        }
    }
}

quickSort(unsortedArr, 0, unsortedArr.length - 1);