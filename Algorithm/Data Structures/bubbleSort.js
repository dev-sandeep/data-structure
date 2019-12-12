/**
 * binary sort goes here
 */

var unsortedArr = [1, 3, 2, 4, 6, 5, 9, 8, 7];

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
 
function bubbleSort(arr) {
    if(!arr)
        return false;
    var maxLen = arr.length;
    
    for (var i = 0; i < maxLen; i++) {
        for (var j = i; j < maxLen; j++) {
            if (arr[j] && arr[j + 1] && arr[j] > arr[j + 1]) {
                arr = swap(arr, j, j + 1);
            }
        }
    }
    console.log(arr);
}

var final = bubbleSort(unsortedArr);