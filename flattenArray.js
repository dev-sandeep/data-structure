/**
 * responsible for flatteing the array
 */

var mainArr = [1, [2, [3, 4, [5, 6], 7, [8, 9, 11, [12, 13, [14]]]]]];
var finalArr = [];
function flatten(arr) {
    //loop through the array
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            finalArr.push(arr[i]);
        } else {
            flatten(arr[i]);
        }
    }
    return finalArr;
}

console.log(flatten(mainArr));