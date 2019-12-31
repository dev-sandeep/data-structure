let init = arr => {
    let oneCompare = (arr, start, end) => {

        let swap = (arr, a, b) => {
            let temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;

            return arr;
        }

        for (let i = start; i < end; i++) {
            if (arr[i] > arr[i + 1])
                arr = swap(arr, i, i + 1);
        }
    }

    for (let j = arr.length - 1; j >= 0; j--) {
        oneCompare(arr, 0, j);
    }

    console.log(arr);

}
let arr = [1, 3, 2, 7, 34, 21, 90, 88, 10];
init(arr)