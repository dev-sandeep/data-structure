
const getPairSum = (arr, reqSum, skipIndex) => {
    let obj = {}, diff;
    for (var i in arr) {
        if (i == skipIndex)
            continue;
        diff = reqSum - arr[i];
        if (!obj[diff])
            obj[diff] = true;

        if (obj[arr[i]]) {
            console.log(arr[i], diff);
            return true;
        }
    }
}

const init = (arr) => {
    for (var i in arr) {
        let reqSum = 0 - arr[i];
        if (getPairSum(arr, reqSum, i)) {
            console.log("got it", arr[i]);
        }
    }
}

init([0, -1, 2, -3, 1]);