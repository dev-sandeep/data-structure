// https://www.geeksforgeeks.org/count-minimum-number-subsets-subsequences-consecutive-numbers/

const merge = (a1, a2) => {
    let p1 = 0, p2 = 0, arr = [];
    while (p1 < a1.length && p2 < a2.length) {
        if (a1[p1] < a2[p2])
            arr.push(a1[p1++]);
        else
            arr.push(a2[p2++]);
    }

    let re1 = a1.slice(p1);
    let re2 = a2.slice(p2);

    return arr.concat(re1).concat(re2);
}

const mergeSort = arr => {
    if (arr.length < 2)
        return arr;
    let mid = Math.floor(arr.length / 2);
    let a1 = arr.slice(0, mid);
    let a2 = arr.slice(mid);

    return merge(mergeSort(a1), mergeSort(a2));
}
const init = arr => {
    arr = mergeSort(arr);

    let mainArr = [];
    let tempArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        tempArr.push(arr[i]);
        if (arr[i + 1] && arr[i + 1] - arr[i] != 1) {
            mainArr.push(tempArr);
            tempArr = [];
        }
        // if (arr[i + 1] - arr[i] == 1) {
        //     tempArr.push(arr[i]);
        // } else {
        //     if (arr[i - 1] && arr[i] - arr[i - 1] == 1)
        //         tempArr.push(arr[i]);

        //     if (tempArr.length > 0) {
        //         mainArr.push(tempArr);
        //         tempArr = [];
        //     }
        // }
    }

    let maxI = arr.length - 1;
    if(arr[maxI] - arr[maxI - 1] != 1){
        mainArr.push([arr[maxI]]);
    }else{
        tempArr.push(arr[maxI]);
        mainArr.push(tempArr);
    }

    console.log(mainArr);
}

init([100, 56, 5, 6, 102, 58,101, 57, 7, 103, 59]);
init([10, 100, 105]);