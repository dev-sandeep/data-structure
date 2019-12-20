// geeksforgeeks.org/check-exist-two-elements-array-whose-sum-equal-sum-rest-array/

const init = (arr) => {
    let total = 0;
    for (i in arr)
        total += arr[i];
   
    let requiredSum = total / 2;
    
    let obj = {};
    for (var i in arr) {
        let diff = requiredSum - arr[i];
   
        if (!obj[diff])
            obj[diff] = true;

        if (obj[arr[i]])
            return [arr[i], diff - arr[i]];
    }
}

console.log(init([2, 11, 5, 1, 4, 7]));