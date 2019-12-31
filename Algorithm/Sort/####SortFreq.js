const merge = (arr1, arr2) => {
    let pt1 = 0, pt2 = 0;
    let newNode = [];
    while (pt1 < arr1.length && pt2 < arr2.length) {
        if (arr1[pt1] < arr2[pt2]) {
            newNode.push(arr1[pt1++]);
        } else {
            newNode.push(arr2[pt2++]);
        }
    }

    let rem1 = arr1.slice(pt1);
    let rem2 = arr2.slice(pt2);

    return newNode.concat(rem1).concat(rem2);
}


const sort = (arr) => {
    if (arr.length < 2)
        return arr;

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    //console.log(left, right);
    return merge(sort(left), sort(right));
}

const binarySearch = (arr, l, h, x) => {
    let mid = Math.floor((l + h) / 2);
    if (arr[mid] == x)
        return mid;
    if (l >= h)
        return -1;

    if (x < arr[mid])
        h = mid - 1;
    else
        l = mid + 1;

    return binarySearch(arr, l, h, x);
}

const init = (arr) => {
    let uniqueArr = [];
    let obj = {};
    for (let i in arr) {
        if (!obj[arr[i]])
            obj[arr[i]] = 1;
        else
            obj[arr[i]]++;
    }

    /* reset and print the array */


    for (let i in arr) {
        if (uniqueArr.indexOf(arr[i]) == -1) {
            uniqueArr.push(arr[i]);
        }
    }

    let objArr = [];
    for (let i in uniqueArr) {
        objArr.push({ num: uniqueArr[i], freq: obj[uniqueArr[i]] });
    }

    // console.log(uniqueArr);
    let maxPrint = () => {
        let index = -1, max = 0, num = 0;
        objArr.map((data, i) => {
            if (data.freq > max) {
                max = data.freq;
                num = data.num;
                index = i;
            }
        });
        objArr.splice(index, 1);
        return { max, num, index };
    }

    console.log(objArr);
    let upper = objArr.length;
    for (var i = 0; i < upper; i++) {
        let x = maxPrint();
        console.log(x);
    }
    // let x = maxPrint();
    // console.log(x);
    // console.log(objArr);
    // let finalArr = [];
    // let findMaxFreq = (obj) => {
    //     let num = 0, freq = 0;
    //     // console.log(obj);
    //     for (var key in obj) {
    //         if (obj[key] > freq) {
    //             freq = obj[key];
    //             num = key;
    //         }
    //     }

    //     return { num, freq }
    // }
    let finalArr = [];
    let print = (num, freq) => {
        let ct = 0
        while (ct++ < freq) {
            finalArr.push(num);
        }
    }

    // for (let i in obj) {
    //     let x = findMaxFreq(obj);
    //     if (x.freq > 1) {
    //         delete obj[x.num];
    //         print(x.num, x.freq);
    //     }
    // }

    // for (let i in obj) {
    //     print(i, obj[i]);
    // }
    // console.log(finalArr);
    //traverse the array

}
// let arr = [2, 5, 2, 8, 5, 6, 8, 8];
// init([2, 5, 2, 8, 5, 6, 8, 8, 7,10, 10]);
init([2, 5, 2, 8, 5, 16, 8, 8, 7, 10, 10]);
// let x = binarySearch(arr, 0, arr.length - 1, 8);
// console.log(x);