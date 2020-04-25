/**
 * QuickSort
 * refer: https://www.youtube.com/watch?v=SLauY6PpjW4
 */
let input = [1, 5, 3, 2, 5, 8, 2, 4, 6, 7, 3, 11];

var swap = (arr, l, h) => {
    let temp = arr[l];
    arr[l] = arr[h];
    arr[h] = temp;
}

let quickSort = (arr, l, h) => {
    if (l < h) {
        var pi = partition(arr, l, h);
        quickSort(arr, l, pi - 1);// ###############impportant
        quickSort(arr, pi, h);
    }
}

let partition = (arr, l, h) => {
    var pivot = arr[Math.floor((l + h) / 2)];

    while (l <= h) {
        while (arr[l] < pivot)
            l++;

        while (arr[h] > pivot)
            h--;

        if (l <= h) {
            swap(arr, l, h);
            l++;
            h--;
        }
    }

    return l;
}

quickSort(input, 0, input.length - 1);
console.log(input);
