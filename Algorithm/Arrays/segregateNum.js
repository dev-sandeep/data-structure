// https://www.geeksforgeeks.org/segregate-even-odd-numbers-set-3/

const init = (arr) => {
    let start = 0, end = arr.length - 1;
    let swap = (arr, a, b) => {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        return arr;
    }

    var dirtyStart = -1, dirtyEnd = -1;
    while (start < end) {
        if (arr[start] % 2 != 0) {
            dirtyStart = start;
        } else {
            start++;
        }

        if (arr[end] % 2 == 0) {
            dirtyEnd = end;
        } else {
            end--;
        }

        if (parseInt(dirtyStart) > 0 && parseInt(dirtyEnd) > 0) {
            console.log("swap", dirtyStart, dirtyEnd);
            arr = swap(arr, dirtyStart, dirtyEnd);
            dirtyStart = -1;
            dirtyEnd = -1;
            start++; end--;
        }
    }
    console.log(arr);
}

init([2, 4, 1, 9, 5, 3, 2, 6, 7, 11, 10, 1]);