// https://www.geeksforgeeks.org/find-three-closest-elements-from-given-three-sorted-arrays/

/**
 * THIS IS A BEAUTIFUL WAY TO FIND CLOSEST ELEMENT IN SEARCH
 * @param {} arr 
 * @param {*} l 
 * @param {*} h 
 * @param {*} x 
 */
const binarySearch = (arr, l, h, x) => {
    if (l >= h || h - l == 1) {
        return Math.abs(x - arr[h]) < Math.abs(x - arr[l]) ? h : l;
    }

    let m = Math.floor((l + h) / 2);
    if (x < arr[m])
        h = m;
    else
        l = m;

    return binarySearch(arr, l, h, x);
}

const init = (arr) => {
    //parse the first array only
    let firstArr = arr[0];
    for (var index in firstArr) {
        console.log("first1", firstArr[index]);
        console.log("close1", arr[1][binarySearch(arr[1], 0, arr[1].length - 1, firstArr[index])]);
        console.log("close2", arr[2][binarySearch(arr[2], 0, arr[2].length - 1, firstArr[index])]);
        console.log("----");
    }

}

init([[20, 24, 100], [2, 19, 22, 79, 800], [10, 12, 23, 24, 119]]);
// let arr = [2, 19, 22, 79, 800];
// console.log(binarySearch(arr, 0, arr.length - 1, 24));