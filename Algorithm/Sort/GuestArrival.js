// https://www.geeksforgeeks.org/find-the-point-where-maximum-intervals-overlap/

const makeMaxHeap = (arr, index, heapSize) => {

}

const getMax = arr => {
    let max = 0;
    for (i in arr)
        if (arr[i] > max)
            max = arr[i];
    return max;
}

const customBinary = (arr, l, h, x) => {
    let mid = Math.floor((l + h) / 2);
    console.log("x", l, h);

    if (l > h) {
        return { ctr: 0, fnd: -1 };
    }

    if (arr[mid] == x) {
        let fnd = mid;
        let pos = mid, neg = mid;

        let ctr = 1;
        while (arr[++pos] == x) {
            ctr++;
        }

        while (arr[--neg] == x) {
            ctr++;
        }

        return { ctr, fnd };
    }

    if (x < arr[mid])
        h = mid - 1;
    else if (x > arr[mid])
        l = mid + 1;

    return customBinary(arr, l, h, x);



}

const init = (start, end) => {

    let x = getMax(end);
    let maxGuest = 0;
    let currentGuest = 0;
    let tempCtSt = 0;
    let tempCtEn = 0;
    console.log(start, end);
    for (let i = 1; i <= x; i++) {
        tempCtSt = customBinary(start, 0, start.length, i).ctr;
        tempCtEn = customBinary(end, 0, end.length, i).ctr;
        console.log(i, { tempCtSt, tempCtEn });
        if (tempCtSt > 0)
            currentGuest += tempCtSt;
        console.log(i, currentGuest);
        if (tempCtEn > 0)
            currentGuest -= tempCtEn;
    }
}

// init([1, 2, 5, 5, 10], [4, 5, 9, 12, 12]);

console.log(customBinary([1, 2, 5, 5, 10], 0, 5, 2));