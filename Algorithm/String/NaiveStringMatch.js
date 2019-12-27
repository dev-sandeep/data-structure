// https://www.geeksforgeeks.org/naive-algorithm-for-pattern-searching/

const init = (str, pat) => {
    let patPtr = 0;
    for (let i in str) {
        if (str[i] == pat[patPtr]) {
            patPtr++;
            if(patPtr == pat.length)
                console.log("matched", i);

        } else {
            //does not match
            if (patPtr)
                patPtr = 0;
        }
    }
}

let str = 'THIS IS A TEST TEXT';
let pat = "TEST"
init(str, pat);