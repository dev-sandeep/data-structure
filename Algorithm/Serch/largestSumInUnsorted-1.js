
const init = (arr) => {
    let max = arr[0];
    let prevMax = arr[0];
    for (var index in arr) {
        if (arr[index] > max) {
            prevMax = max;
            max = arr[index];
        }
    }

    console.log(prevMax + max);
}

init([12, 34, 10, 6, 40]);