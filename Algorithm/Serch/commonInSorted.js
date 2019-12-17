// https://www.geeksforgeeks.org/find-common-elements-three-sorted-arrays/
var obj = {}, common = [];
const findCommon = (arr) => {
    for (var index in arr) {
        if (!obj[arr[index]])
            obj[arr[index]] = 1;
        else
            obj[arr[index]]++;

        console.log(arr[index], obj[arr[index]]);
        if (obj[arr[index]] > 2) {
            common.push(arr[index]);
        }
    }

}

const init = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        findCommon(arr[i]);
    }

    console.log(common);
}

init([[1, 2, 3, 8], [3, 8, 9], [8, 9, 10, 11, 12]]);