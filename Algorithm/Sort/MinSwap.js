// https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/


const init = arr => {
    let temp = arr.slice(0);
    arr.sort();
    let ctr = 0;
    for (let i in arr) {
        if (arr[i] != temp[i]) {
            ctr++;
        }
    }

    console.log(Math.floor(ctr/2));

}

init([4, 5, 2, 1, 5])