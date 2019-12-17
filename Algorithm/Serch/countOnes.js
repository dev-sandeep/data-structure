const binarySolution = (arr, start, end) => {
    let search = 1;

    if (start < end) {

        let mid = Math.round((start + end) / 2);

        if (arr[mid] == search)
            return mid;

        if (search < arr[mid])
            start = mid + 1;

        else if (search > arr[mid])
            end = mid - 1;

        return binarySolution(arr, start, end);
    }

    return -1;
}
const init = (arr) => {
    let res = binarySolution(arr, 0, arr.length - 1);
    let leftPtr = res - 1, rightPtr = res + 1;
    let ctr = 1;
    while (arr[leftPtr] == 1 || arr[rightPtr] == 1) {
        console.log(leftPtr, rightPtr);
        if (arr[leftPtr]) {
            leftPtr--;
            ctr++;
        }

        if (arr[rightPtr]) {
            rightPtr++;
            ctr++;
        }
    }

    console.log(ctr);
}

init([0, 0, 1, 1, 0, 0, 0, 0]);