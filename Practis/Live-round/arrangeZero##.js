// https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s/0
// 0 0 1 2 2
// 2 2 2 2 2 1 1 0 1
// 1 0 1 1 2 2 2 2 2
// 1 1 0 1 2 2 2 2 2
// 0 1 2 2 2 2 2 1 1

// 1 0 1 1

let j = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0){
        swap(arr, i, j);
        ++j;
    }
}

// 1 0 0 0 0 1
