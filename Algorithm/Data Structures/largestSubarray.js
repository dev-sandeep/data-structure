function init(arr) {
    function swap(arr, a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        return arr;
    }
    //quick sort
    var index, prev = Math.pow(10, 10);
    arr.map((elem, ind) => {
        if (elem > prev)
            index = ind;

        prev = elem;
    });

    var a1 = arr.slice(0, index + 1);
    var a2 = arr.slice(index + 1, arr.length);
    console.log(a1, a2);
    mergeSortedArray(a1, a2.reverse());
}

function mergeSortedArray(a1, a2) {
    // console.log(a1,a2);
    //traverse through the array and make a sorted array
    var maxArray = a1.length > a2.length ? a1 : a2;
    var finaArr = [], ctr1 = 0, ctr2 = 0, ctr = 0;
    while (ctr < maxArray.length) {
        if (a1[ctr1] < a2[ctr2]) {
            finaArr.push(a1[ctr1]);
            console.log(ctr1);
            ctr1++
        } else {
            finaArr.push(a2[ctr2]);
            console.log(ctr2);
            ctr2++;
        }
        ctr++;
    }
    console.log(finaArr);
}

init([1, 2, 3, 4, 5, 2, 1, 0]);