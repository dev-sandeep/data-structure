// https://www.geeksforgeeks.org/queries-greater-not-less/

const binarySearh = (arr, start, end, x) => {
    let mid = Math.floor((start + end) / 2);
    if (start >= end)
        return -1;

    if (arr[mid] == x)
        return mid;

    if (x > arr[mid])
        start = mid + 1;
    else if (x < arr[mid])
        end = mid - 1;

    return binarySearh(arr, start, end, x);
}

const checkGreatness = (arr, index, type, elem) => {
    let ctr = 0;
    if (index == -1)
        return 0;

    for (var i = index; i < arr.length; i++) {
      
        if (type == 0 && arr[i] >= elem) {
            ctr++;
        } else if (type == 1 && arr[i] > elem) {
            ctr++
        }
    }

    return ctr;
}

const init = (arr, queries) => {
    for (var index in queries) {
        if (queries[index].q == 0) {//greater than equal
            let res = binarySearh(arr, 0, arr.length - 1, queries[index].x);
            console.log(checkGreatness(arr, res, queries[index].q, queries[index].x));
        } else {//greater only  
            let res = binarySearh(arr, 0, arr.length - 1, queries[index].x);
            console.log(checkGreatness(arr, res, queries[index].q, queries[index].x));
        }
    }
}


// init([1, 2, 3, 5], [{ q: 1, x: 3 }]);
init([1, 2, 3, 5], [{ q: 0, x: 5 }, { q: 1, x: 3 }, { q: 0, x: 3 }]);