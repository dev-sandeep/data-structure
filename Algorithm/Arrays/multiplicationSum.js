// https://www.geeksforgeeks.org/replace-every-array-element-by-multiplication-of-previous-and-next/

const init = (arr) => {
    arr[0] *= arr[1];
    var lastElem = 0, temp;
    for (var i = 1; i < arr.length - 1; i++) {
        temp = arr[i];
        if (lastElem)
            arr[i] = lastElem * arr[i + 1];
        else
            arr[i] *= arr[i + 1];
        lastElem = temp;
    }
    arr[i] *= lastElem;
    console.log(arr);
}


init([2, 3, 4, 5, 6]);