// https://www.geeksforgeeks.org/print-all-possible-consecutive-numbers-with-sum-n/

let arr = [];
const init = (sum) => {
    let l = 1, h = 2, arr = [];
    let tempSum = l + h;
    while (h <= 100 && l <= 100) {
        console.log(l, h, tempSum);
        if (tempSum == sum) {

            arr.push(l);
            arr.push(h);
            arr.push("|");
            l++;
            h++;

            tempSum = tempSum - (l - 1) + h;
            console.log("tempsum", tempSum);
        } else if (tempSum > sum) {
            tempSum = tempSum - (l);
            l++;
        } else if (tempSum < sum) {
            tempSum += ++h;

        }
    }

    console.log(arr);
}

init(100);