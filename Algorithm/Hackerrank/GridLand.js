// https://www.hackerrank.com/challenges/gridland-metro/problem

let x = [[2, 1, 1], [2, 3, 3], [3, 1, 3], [3, 1, 1]];
let m = 4;

let init = (m, x) => {
    let max = m * m;
    let maxCol = m;
    var obj = {};
    for (let i = 0; i < x.length; i++) {
        if (!obj[x[i][0]]) {
            obj[x[i][0]] = [];
            obj[x[i][0]].push([x[i][1], x[i][2]]);
        }
        else
            obj[x[i][0]].push([x[i][1], x[i][2]]);
    }

    console.log(obj);

    let calculateSum = (arr, maxCol) => {
        if (arr.length == 0)
            return 0;

        // let temp = new Array(maxCol);
        // console.log(temp.length);
        for (let i = 0; i < arr.length; i++) {
            // for (let j = arr[i][0]; j <= arr[i][1]; j++)
            //     temp[j] = true;
        }
        let total = 0;

        for (let k = 0; k < temp.length; k++) {
            if(temp[k])
                total ++;
        }
        console.log(total);
        return (total);
    }

    //now traverse the processes object and find the total
    let total = 0;
    for (let i in obj) {
        // console.log(obj[i]);
        total += calculateSum(obj[i], maxCol);
    }
    console.log(total);
}

init(m, x);

//[1,2][1,3[4, 5]]

//[1,3][4,5]
