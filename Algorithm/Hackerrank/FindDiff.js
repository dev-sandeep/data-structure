// https://www.hackerrank.com/challenges/pairs/problem

const merge = (leftArr, rightArr) => {
    let leftPtr = 0, rightPtr = 0;
    let newArr = [];
    while (leftPtr < leftArr.length && rightPtr < rightArr.length) {
        if (leftArr[leftPtr] < rightArr[rightPtr]) {
            newArr.push(leftArr[leftPtr++]);
        } else {
            newArr.push(rightArr[rightPtr++]);
        }
    }

    let remainLeft = leftArr.slice(leftPtr);
    let remainRight = rightArr.slice(rightPtr);

    return newArr.concat(remainLeft).concat(remainRight);
}

const mergeSort = (arr) => {
    if (arr.length < 2)
        return arr;

    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const binarySearch = (arr, l, h, x) => {
    let mid = Math.floor((l + h) / 2);

    if (l > h)
        return -1;

    if (arr[mid] == x)
        return mid;

    if (x < arr[mid])
        h = mid - 1;
    else
        l = mid + 1;

    return binarySearch(arr, l, h, x);
}


const init = (arr, diff) => {

    arr = mergeSort(arr);
    for (let i in arr)
        arr[i] = parseInt(arr[i]);

    let find = 0, index, ctr = 0;
    let lastElem = arr[arr.length - 1];
    for (let i = 0; i < arr.length && find <= lastElem; i++) {
        find = arr[i] + diff;
        index = binarySearch(arr, 0, arr.length - 1, find);
        if (index > -1)
            ctr++;
    }

    console.log(ctr);
}
let str = '363374326 364147530 61825163 1073065718 1281246024 1399469912 428047635 491595254 879792181 1069262793';
str = '1 3 5 8 6 4 2';
let x = [1, 5, 3, 4, 2];
console.log(init(str.split(" "), 2));