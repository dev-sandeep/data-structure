// https://www.geeksforgeeks.org/positive-elements-at-even-and-negative-at-odd-positions-relative-order-not-maintained/

const init = (arr) => {
    var unsafEvenPtr = -1;//positive
    var unsafeOddPtr = -1;//negative
    ctr = 0;

    let swap = (arr, a, b) => {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        return arr;
    }
    while (ctr < arr.length) {
        if (ctr % 2 == 0) {
            if (arr[ctr] < 0)
                unsafEvenPtr = ctr;
        } else {
            if (arr[ctr] > 0)
                unsafeOddPtr = ctr;
        }
        ctr++;
        if(unsafEvenPtr >= 0 && unsafeOddPtr >= 0){
            arr = swap(arr, unsafEvenPtr, unsafeOddPtr);
            unsafEvenPtr = -1;
            unsafeOddPtr = -1;
        }
    }

    console.log(arr);
}

init([-1, 3, -5, 6, 3, 6, -7, -4, -9, 10]);