// https://www.geeksforgeeks.org/find-a-permutation-that-causes-worst-case-of-merge-sort/

const merge = (ar1, ar2) => {
    let p1 = 0, p2 = 0, fin = [];
    while (p1 < ar1.length && p1 < ar2.length) {
        if (ar1[p1] < ar2[p2])
            fin.push(ar1[p1++]);
        else if (ar2[p2] < ar1[p1])
            fin.push(ar2[p2++]);
    }

    let re1 = ar1.slice(p1);
    let re2 = ar2.slice(p2);

    return fin.concat(re1).concat(re2);
}

var ctr = 0;

const mergeSort = (arr) => {
    ctr++;
    if (arr.length < 2)
        return arr;

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

let arr = [1, 9, 5, 13, 3, 11, 7, 15, 2, 10, 6,
    14, 4, 12, 8, 16];

for (let i = 0; i < arr.length; i = i + 2) {
    if(i % 2 == 0){
        
    }
}
let x = mergeSort(arr);
console.log(x);
console.log(ctr);