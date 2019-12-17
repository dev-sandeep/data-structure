// https://www.geeksforgeeks.org/count-number-of-occurrences-or-frequency-in-a-sorted-array/

const binarySearch = (arr, start, end, searchElem) => {
    let mid = Math.round((start + end) / 2);

    if (arr[mid] == searchElem) {
        return mid;
    }

    if (start >= mid) {
        return -1;
    }

    if (searchElem > arr[mid]) {
        start = mid + 1;
    } else if (searchElem < arr[mid]) {
        end = mid - 1;
    }

    return binarySearch(arr, start, end, searchElem);
}

const calculateFreq = (arr, index, searchElem) => {
    //take 2 pointers and send them at east and west
    let left = index, right = index, ctr = 1;
    while ((arr[left] == searchElem || arr[right] == searchElem) && ctr < arr.length) {
        if (arr[--left] == searchElem) {
            ctr++;
        }

        if (arr[++right] == searchElem) {
            ctr++;
        }
        console.log(index, left, right);
    }

    console.log("frequency: ", ctr);
}

const init = (arr, searchElem) => {
    let index = binarySearch(arr, 0, arr.length - 1, searchElem);
    calculateFreq(arr, index, searchElem);
}

init([1, 1, 2, 2, 2, 2, 2, 3], 2);