// https://www.geeksforgeeks.org/sort-even-placed-elements-increasing-odd-placed-decreasing-order/

let merge = (a1, a2, isDecr) => {
    let p1 = 0, p2 = 0, na = [];
    while (p1 < a1.length && p2 < a2.length) {
        if (a1[p1] > a2[p2])
            na.push(a1[p1++]);
        else
            na.push(a2[p2++]);
    }

    let re1 = a1.slice(p1);
    let re2 = a2.slice(p2);

    return na.concat(re1).concat(re2);
}

let mergeSort = (arr, isDecr) => {
    if (arr.length < 2)
        return arr;

    let mi = Math.floor(arr.length / 2);
    let le = arr.slice(0, mi);
    let ri = arr.slice(mi);
    return merge(mergeSort(le), mergeSort(ri), isDecr);
}

const init = (arr) => {
    let evA = [], odA = [];
    for (let i in arr) {
        if (i % 2 == 0)
            evA.push(arr[i]);
        else
            odA.push(arr[i]);
    }

    odA = mergeSort(odA, true);
    let fin = [];
    for(let i in odA){
        fin.push(evA[i]);
        fin.push(odA[i]);
    }

    console.log(fin);
}

let x = [0, 1, 2, 3, 4, 5, 6, 7];
init(x);
