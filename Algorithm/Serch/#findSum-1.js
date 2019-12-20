// https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/

const init = (arr, total) => {
    let diff, obj = {};
    for (index in arr) {
        diff = total - arr[index];

        if(obj[arr[index]])
            console.log("got it", arr[index], diff);

        if(!obj[diff])
            obj[diff] = true;
    }
}

let res = init([1, 4, 45, 6, 10, -8], 16);
console.log(res);