// https://www.geeksforgeeks.org/k-maximum-sum-combinations-two-arrays/

const init = (ar1, ar2) => {
    let sumArr = [], p1 = ar1.length - 1, p2 = ar2.length - 1;
    ar1 = ar1.sort();
    ar2 = ar2.sort();
    console.log(ar1, ar2);
    while (p1 >= 0 || p2 >= 0) {
        console.log(p1, p2);
        if (ar1[p1] > ar2[p2]) {
            sumArr.push(ar1[p1] + ar2[p2--]);
        } else {
            sumArr.push(ar2[p2] + ar1[p1--]);
        }
    }

    console.log(sumArr);


}

init([4, 2, 5, 1], [8, 0, 3, 5]);