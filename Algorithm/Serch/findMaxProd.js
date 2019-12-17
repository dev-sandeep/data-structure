const init = (arr) => {
    let max = arr[0];
    let prevMax = arr[0];
    let min = arr[0];
    let prevMin = arr[0];

    for (var index in arr) {
        if (arr[index] > max) {
            prevMax = max;
            max = arr[index];
        }

        if (arr[index] < min) {
            prevMin = min;
            min = arr[index];
        }
    }

    let prodMax = max * prevMax;
    let prodMIn = min * prevMin;

    console.log(prodMIn > prodMax ? prodMIn : prodMax);
}

// init([1, 4, 3, 6, 7, 0]);
init([-1, -3, -4, 2, 0, -5]);