let arr = [1, 18, 2, 10, 3, 45];

const merge = (left, right) => {
    let leftCtr = 0, rightCtr = 0;
    let arr = [];

    while(leftCtr < left.length && rightCtr < right.length){
        if(left[leftCtr] < right[rightCtr]){
            arr.push(left[leftCtr++]);
        }else{
            arr.push(right[rightCtr++]);
        }
    }

    let remainLeft = left.slice(leftCtr);
    let remainRight = right.slice(rightCtr);
    return arr.concat(remainLeft).concat(remainRight);
}

const mergeSort = (arr) => {
    let mid = Math.floor(arr.length / 2);
    console.log(arr);
    if(arr.length < 2)
        return arr;

    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

let res = mergeSort(arr);
console.log(res);