// https://www.geeksforgeeks.org/find-a-fixed-point-in-a-given-array/

const init = (arr) => {
    for (var index in arr) {
        if (index == arr[index])
            return index;
    }
}

let res = init([0, 2, 5, 8, 17]);
console.log(res);