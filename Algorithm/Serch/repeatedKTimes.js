// https://www.geeksforgeeks.org/find-a-peak-in-a-given-array/

const init = (arr) => {
    var obj = {};
    for (var index in arr) {
        if (obj[arr[index]])
            obj[arr[index]]++;
        else
            obj[arr[index]] = 1;
    }

    console.log(obj);
}

init([1, 2, 3, 6, 6, 6, 8, 8, 8, 2, 2, 2, 2]);