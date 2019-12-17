/**
 * this is a repitition of the previous prroblem
 */

const getRotatedIndex = (arr, start, end) => {
    //implement the binary search itself
    let mid = Math.round((start + end) / 2);
    if (arr[start] == arr[mid] || arr[end] == arr[mid]) {
        return mid;
    }

    if (arr[start] > arr[mid]) {
        end = mid;//** make sure this is not mid+1 */
    } else if (arr[end] < arr[mid]) {
        start = mid;
    }

    return getRotatedIndex(arr, start, end);
}

const getOriginalIndex = (arr, rotatedIndex, requiredIndex) => {
    return (requiredIndex + rotatedIndex) % arr.length;
}

const binarySearch = (arr, start, end, searchItem, rotatedIndex) => {
    let mid = Math.round((start + end) / 2);
    let oMid = getOriginalIndex(arr, rotatedIndex, mid);
    console.log(start, end);
    if (arr[oMid] == searchItem) {
        return oMid;
    }

    if (start >= arr[oMid])
        return -1;

    if (searchItem < arr[oMid]) {
        end = mid - 1;
    } else if (searchItem > arr[oMid]) {
        start = mid + 1;
    }
    // start = getOriginalIndex(arr, rotatedIndex, start);
    // end = getOriginalIndex(arr, rotatedIndex, end);

    console.log(start, end);
    return binarySearch(arr, start, end, searchItem, rotatedIndex);
}


const init = (arr, searchElem) => {
    let res = getRotatedIndex(arr, 0, arr.length - 1);
    res = binarySearch(arr, 0, arr.length - 1, searchElem, res);
    console.log(res);
}

init([5, 6, 7, 8, 9, 10, 1, 2, 3, 4], 3);