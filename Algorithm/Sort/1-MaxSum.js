// https://www.geeksforgeeks.org/maximum-sum-combination-from-two-arrays/
let init = (ar1, ar2) => {
    let max = ar1.length > ar1.length ? ar1.length : ar2.length;
    let c1 = 0, c2 = 0;
    for (let i = 0; i < max; i++) {
        if (i % 2 == 0) {
            c1 += ar1[i] || 0;
            c2 += ar2[i] || 0;
        } else {
            c1 += ar2[i] || 0;
            c2 += ar1[i] || 0;
        }
    }
    console.log(c1, c2);
}

init([1, 2, 9], [10, 1, 1]);