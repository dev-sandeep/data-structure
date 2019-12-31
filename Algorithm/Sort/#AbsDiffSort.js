// https://www.geeksforgeeks.org/sort-an-array-according-to-absolute-difference-with-given-value/

const init = (arr, diff) => {
    // let tm = arr.slice(0);
    arr = arr.sort();
    arr = [2, 3, 5, 9, 10];
    arr.reverse();

    //create object
    let obj = {}, indArr = [];
    for (let i in arr) {
        obj[diff - arr[i]] ? '' : obj[diff - arr[i]] = arr[i];
        indArr.push(diff - arr[i]);
    }

    // indArr.reverse();
    // arr.reverse();

    console.log(indArr);
    console.log(arr);
    let index;

    let findPlace = (arr, x) => {
        console.log("--", arr, x);
        let ctr = 0;
        for (let i in arr) {
            if (x > arr[i])
                return ctr;

            ctr++;
        }

        return ctr;
    }

    let main = [];
    let mainIndex = [];
    for (let i = 0; i < indArr.length; i++) {
        if (indArr[i] > 0) {
            main.push(arr[i]);
            mainIndex.push(indArr[i]);
        }
    }
    for (let i = 0; i < indArr.length; i++) {
        if (indArr[i] < 0) {
            index = findPlace(mainIndex, indArr[i] * -1);
            console.log("res", index);
        }
    }
    console.log(main, mainIndex);

}

init([10, 5, 3, 9, 2], 7)

//10, 5, 3, 9, 2
//3, 2, 4, 2, 5
//-3, 2, 4, -2, 5

//5, 9, 10,  3, 2
//2, -2, -3, 4, 5
