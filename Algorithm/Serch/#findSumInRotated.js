//Given a sorted and rotated array, find if there is a pair with a given sum

const getRotatedIndex = (arr, start, end) => {
    let mid = Math.floor((start + end) / 2)
    console.log(start, end);
    if (start >= end || end - start == 1)
        return end;

    if (arr[start] > arr[mid])
        end = mid;
    else if (arr[end] < arr[mid])
        start = mid;

    return getRotatedIndex(arr, start, end);
}

const init = (arr, sum) => {
    let res = getRotatedIndex(arr, 0, arr.length - 1);
    console.log("Rotated Index: ", res);
    //fix the array
    let sortedArray = new Array();
    for (var i = res, ctr = 0; ctr < arr.length; ctr++ , i++) {
        i = i % arr.length;
        sortedArray[ctr] = arr[i];
    }

    let result = getSumCount(arr, sum);
    console.log("Count: ", result);
}

const getSumCount = (arr, sum) => {
    let start = 0,
        end = arr.length - 1,
        n = arr.length,
        ctr = 0;

    if (end < 0)
        end = 0;

    let foundSum = 0;
    while (start < end) {
        // console.log(arr[start], arr[end]);
        foundSum = arr[start] + arr[end];
        if (foundSum == sum) {
            console.log(arr[start], arr[end]);
            start++;
            end--;
            ctr++;
        }

        else if (foundSum < sum)
            start++;
        else
            end--;
    }

    return ctr;
}

init([11, 15, 6, 8, 9, 10], 21);