// https://www.hackerrank.com/challenges/connected-cell-in-a-grid/problem

const init = arr => {
    let ctr = 2, obj = {}, max = 0, mixArr = [];
    function creatObj(id) {
        if (!obj[id])
            obj[id] = 1;
        else
            obj[id]++;

        if (obj[id] > max)
            max = obj[id];
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {

            if (!arr[i][j])
                continue;

            if (i == 0 && j == 0) {
                arr[i][j] = ctr;
                creatObj(ctr);

            }
            //check up
            else if (arr[i - 1] && parseInt(arr[i - 1][j]) != 0) {
                arr[i][j] = arr[i - 1][j];
                creatObj(arr[i - 1][j]);

            }
            //check the side ways
            else if (arr[i][j - 1] && parseInt(arr[i][j - 1]) != 0) {
                arr[i][j] = arr[i][j - 1];
                creatObj(arr[i][j - 1]);
            }//check the right
            else if (arr[i][j + 1]) {
                if (arr[i][j + 1] == 1) {
                    //check side upper
                    if (i - 1 >= 0 && j + 1 < arr[i].length - 1 && arr[i - 1][j + 1]) {
                        arr[i][j] = arr[i - 1][j + 1];
                        creatObj(arr[i - 1][j + 1]);
                    }

                    else {
                        arr[i][j] = ++ctr;
                        creatObj(ctr);
                    }

                }
                //check diagonal right
            } else if (i - 1 >= 0 && j + 1 < arr[i].length - 1 && arr[i - 1][j + 1]) {
                arr[i][j] = arr[i - 1][j + 1];
                creatObj(arr[i - 1][j + 1]);
            }
            else if (i - 1 >= 0 && j - 1 >= 0 && arr[i - 1][j - 1]) {
                arr[i][j] = arr[i - 1][j - 1];
                creatObj(arr[i - 1][j - 1]);
            }
            else {
                arr[i][j] = ++ctr;
                creatObj(ctr);
            }

            //check diagonal
            if (i - 1 >= 0 && j + 1 < arr[i].length - 1 && arr[i - 1][j + 1]) {
                if (arr[i][j - 1]) {
                    if (mixArr.indexOf(arr[i][j - 1]) == -1) {
                        mixArr.push(arr[i][j - 1]);
                        mixArr.push(arr[i - 1][j + 1]);
                    }

                }
            }
        }
    }

    console.log(obj);
    if (mixArr.length > 0) {
        let sum = 0;
        for (let i in mixArr)
            sum += obj[mixArr[i]];
        return sum;
    }

    console.log(arr);
    return max;
}

// let x = [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 0], [1, 0, 0, 0]];
// let x = [[1, 1, 0], [1, 0, 0], [0, 0, 1]];
let x =
    [
        [0, 1, 0, 0, 0, 0, 1, 1, 0],
        [1, 1, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 1],
        [0, 1, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 1, 0, 1, 1, 0],
        [0, 1, 0, 0, 1, 1, 0, 1, 1],
        [1, 0, 1, 1, 1, 1, 0, 0, 0]
    ];
console.log(init(x));