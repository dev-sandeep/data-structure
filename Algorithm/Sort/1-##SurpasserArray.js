// https://www.geeksforgeeks.org/find-surpasser-count-of-each-element-in-array/

const binarySearch = (arr, l, h, x) => {
    let mid = Math.floor((l + h) / 2);
    if (l == h || h - l == 1) {
        if (x > arr[h])
            return h;
        else
            return l;
    }

    if (l > h)
        return -1;

    if (x > arr[mid])
        l = mid;
    else
        h = mid;

    return binarySearch(arr, l, h, x);
}

const init = (arr) => {
    let index, temp = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        index = binarySearch(temp, 0, temp.length, arr[i]);
        if (temp.length == 0) {
            temp.push(arr[i]);
            console.log(0);
        }

        else {
            if (arr[i] < temp[index]) {
                console.log(index);
                temp.splice(index, 0, arr[i]);
            }
            else {
                temp.splice(index + 1, 0, arr[i]);
                console.log(index + 1);
            }

        }

    }
    console.log(temp);
}

init([2, 7, 5, 3, 0, 8, 1]);

// let arr = [2, 3]
// console.log(binarySearch(arr, 0, arr.length - 1, 6));