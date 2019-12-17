const init = (arr) => {
    let max = arr[0], min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];

        if (arr[i] < min)
            min = arr[i];
    }

    console.log(min, max);
}

init([1000, 3000]);