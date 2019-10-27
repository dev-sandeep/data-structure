/**
 * Selection sort goes here
 */

var unsortedArr = [10, 1, 3, 2, 4, 6, 5, 9, 8, 7];

function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = temp;

    return arr;
}

function compareArr(arr, index){
    for(var i = 0; i <= index; i++){
        if(arr[i] > arr[index]){
            arr =  swap(arr, i, index);
        }
    }

    return arr;
}

function insertSort(arr){
    for(var i = 0; i < arr.length; i++){
        arr = compareArr(arr, i);
    }
    console.log(arr);
}

insertSort(unsortedArr);