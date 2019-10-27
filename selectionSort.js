/**
 * Selection sort goes here
 */

var unsortedArr = [10, 1, 3, 2, 4, 6, 5, 9, 8, 7];

function findMinAndUnshift(arr, index = 0) {
    let min = 10 ^ 6, minIndex;
    for (var i = index; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }

    /* remove the element after unshift */
    arr.unshift(min);
    arr.splice(minIndex + 1, 1);
    //console.log(min, arr, minIndex);
    return arr;
}

function SelectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr = findMinAndUnshift(arr, i);
        //    final.push(min);
    }
    console.log(arr);
}

SelectionSort(unsortedArr);