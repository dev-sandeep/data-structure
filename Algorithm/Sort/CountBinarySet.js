// https://www.geeksforgeeks.org/sort-array-according-count-set-bits/

const init = arr => {
    let final, tm, obj = {}, ones;
    for (let i in arr) {
        tm = arr[i];
        ones = countOnes(tm.toString(2));
        if (!obj[ones])
            obj[ones] = [arr[i]]
        else
            obj[ones].push(arr[i]);
    }
    console.log(obj);
}

const countOnes = (str) => {
    ctr = 0;
    for (let i = 0; i < str.length; i++)
        if (str[i] == 1)
            ctr++;

    return ctr;
}

init([5, 2, 3, 9, 4, 6, 7, 15, 32]);