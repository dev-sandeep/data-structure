// https://www.hackerrank.com/challenges/sock-merchant/problem
let init = arr => {
    let obj = {};
    let ctr = 0;
    for (let i in arr) {
        if (!obj[arr[i]])
            obj[arr[i]] = 1;
        else {
            obj[arr[i]]++;

            if (obj[arr[i]] % 2 == 0)
                ctr++;
        }

        // console.log(ctr, obj[arr[i]], arr[i]);
    }
    console.log(ctr);
}

let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
init(arr);