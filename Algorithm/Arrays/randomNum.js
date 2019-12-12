// https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
const init = (arr) => {
    var randomNum = Math.floor(Math.random(10) * arr.length);
    console.log("randomNum", randomNum);
    let swap = (arr, a, b) => {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        return arr;
    }
    for (var index in arr) {
        if (index == randomNum)
            continue;
        arr = swap(arr, index, randomNum);
    }

    console.log(arr);
}

init([1, 2, 3, 4, 5]);