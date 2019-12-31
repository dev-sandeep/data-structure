// https://www.hackerrank.com/challenges/missing-numbers/problem


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


const init = (ar1, ar2) => {
    ar1 = mergeSort(ar1);
    ar2 = mergeSort(ar2);
   

    let p1 = 0, p2 = 0, s1 = ar1.length - 1, s2 = ar2.length - 1;
    let arr = [];
    while (p1 < s1 || p2 < s2) {
        if (ar1[p1] == ar2[p2]) {
            p1++;
            p2++;
            continue;
        }else if(ar1[p1] != ar2[p2]){
            
            if(arr[arr.length-1] && arr[arr.length-1] != ar2[p2]){
                arr.push(ar2[p2]);
            }
            if(arr.length == 0){
                arr.push(ar2[p2]);
            }
            p2++;
        }
    }
    console.log(arr);
}

// let a1 = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206]
// let a2 = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]

let a1 = [11, 4, 11, 7, 13, 4, 12, 11, 10, 14];
let a2 = [11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14, 12];
init(a1, a2);

// 3670 3674 3677 3684 3685 3685 3695 3714 3720
// 3670 3674 3677 3684 3685 3695 3714 3720