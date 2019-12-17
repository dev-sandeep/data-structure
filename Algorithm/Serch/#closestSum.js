// https://www.geeksforgeeks.org/given-sorted-array-number-x-find-pair-array-whose-sum-closest-x/

const binarySearch = (arr, start, end, elem) => {
    let pivotIndex = Math.floor((start + end) / 2);
    let pivot = arr[pivotIndex];
    if (pivot == elem)
        return pivotIndex;

    if (start >= end)
        return start;

    if (elem < pivot) {
        end = pivotIndex - 1;
    } else if (elem > pivot) {
        start = pivotIndex + 1;
    }

    return binarySearch(arr, start, end, elem);
}

var closestDiff, result = [];
const closestSum = (arr, total) => {
    closestDiff = arr[arr.length - 1];

    for (var index in arr) {
        let firstElem = arr[index];
        // console.log("firstElem", firstElem);
        let requiredElem = total - firstElem;
        // console.log("required", requiredElem);
        let res = binarySearch(arr, 0, arr.length - 1, requiredElem);
        res = arr[res];
        // console.log("res got", res);

        if ((requiredElem - res) == 0) {
            return [firstElem, requiredElem];
        }
        else {
            let diff = requiredElem - res;
            //converting to positive element
            if (diff < 0)
                diff *= -1;

            console.log("diff", diff, firstElem, requiredElem, res, "closestDiff", closestDiff);
            if (parseInt(diff) < parseInt(closestDiff)) {
                closestDiff = diff;
                result = [firstElem, res]
            }
            // console.log(diff, closestDiff);

        }
    }

    return result;
}

const init = (arr, sum) => {
    let res = closestSum(arr, sum);
    console.log(res);
}

init([1, 2, 3, 4, 5, 8, 10, 12], 19);