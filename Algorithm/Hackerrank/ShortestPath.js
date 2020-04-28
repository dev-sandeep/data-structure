// https://www.hackerrank.com/challenges/red-knights-shortest-path/problem

var arr = [], temp = '';
let init = (sr, de, size) => {
    let max = Math.floor(size / 2);
    if (max % 2 != 0)
        max += 1;

    let ct = 0;

    while (ct < max) {
        temp = '';
        if (de[0] != sr[0]) {
            if (de[0] < sr[0]) {
                sr[0] -= 2;
                temp += 'U';
            } else {
                sr[0] += 2;
                // console.log("test");
                temp += 'L';
            }

            if (de[1] < sr[1]) {
                sr[1]--;
                // console.log("test1");
                temp += "L";
            } else {
                sr[1]++;
                // console.log("test2");
                temp += "R";
            }
        } else {
            if (de[1] < sr[1]) {
                sr[1] -= 2;
                // console.log("test1");
                temp += "L";
            } else {
                sr[1] += 2;
                // console.log("test2");
                temp += "R";
            }
        }



        arr.push(temp);
        ct++;
        //conditions to check the direction
        console.log(sr);
        if (sr[1] == de[1] && sr[0] == de[0]) {

            console.log(ct);
            sortOuput(arr);
            return;
        }
        else if (sr[1] + 2 == de[1] && sr[0] == de[0]) {
            ct++;
            arr.push("R");
            console.log(ct);
            sortOuput(arr);
            return;
        }
        else if (sr[1] - 2 == de[1] && sr[0] == de[0]) {
            ct++;
            arr.push("L");
            console.log(ct);
            sortOuput(arr);
            return;
        }

    }
    // console.log(arr.join(" "));
    //sort the output
    // sortOuput(arr);
    console.log("Impossible");
}

let sortOuput = arr => {
    let final = ['UL', 'UR', 'R', 'LR', 'LL', 'L'];
    let printArr = [];
    let obj = {};
    for (let i in arr) {
        if (!obj[arr[i]])
            obj[arr[i]] = 1
        else
            obj[arr[i]]++;
    }
    //now print
    for (let i in final) {
        let ct = 0;
        while (ct < obj[final[i]]) {
            printArr.push(final[i]);
            ct++;
        }
    }
    console.log(printArr.join(" "));
}

// init([9, 9], [5, 3], 10);
// init([6,6], [0, 1], 7);
// init([0, 3], [4, 3], 7);
init([7, 15], [67, 3], 70);