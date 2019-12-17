// https://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/

const sort = (arr) => {
    let start = 0, end = arr.length - 1;
    const swap = (arr, a, b) => {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;

        return arr;
    }

    while (start != (arr.length - 1)) {

        if (arr[end - 1] &&  arr[end] < arr[end - 1])
            arr = swap(arr, end-1, end);

        end--;

        if (start == end) {
            start++;
            end = arr.length - 1;
        }
        console.log(arr);
    }

    console.log(arr);
}

const num = (arr) => {

}

sort([1,54,3,56,43,33]);