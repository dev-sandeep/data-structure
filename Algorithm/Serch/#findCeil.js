// https://www.geeksforgeeks.org/ceiling-in-a-sorted-array/
const binarySearch = (arr, start, end, searchElem) => {
    console.log(start, end);
    let mid = Math.round((start + end) / 2);
    console.log(mid);
    if (arr[mid] == searchElem) {
        return [arr[mid], arr[mid]];
    }

    if(arr[start] == searchElem)
        return [arr[start], arr[start]] 


    if (start >= mid || end <= mid)
        return [arr[start], arr[end]];

    if (searchElem < arr[mid]) {
        end = mid;
    } else {
        start = mid;
    }

    return binarySearch(arr, start, end, searchElem);
}


const init = (arr, pivotElem) => {
    let res = binarySearch(arr, 0, arr.length - 1, pivotElem);
    console.log(res);
}

init([1, 2, 8, 10, 10, 12, 19], 17);