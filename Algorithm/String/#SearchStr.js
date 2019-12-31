// https://www.geeksforgeeks.org/anagram-substring-search-search-permutations/

const makeBadTable = pat => {
    let obj = {};
    let ctr = 0, index;
    while (ctr < pat.length) {
        index = pat.length - 1 - ctr;
        obj[pat[ctr++]] = index > 1 ? index : 1;
    }
    return obj;
}

const searchStr = (str, pat) => {
    let tempStr = str.slice(0);
    let tempPat = pat.slice(0);

    let patPtr = tempPat.length - 1;
    let strPtr = patPtr;

    let badTable = makeBadTable(pat);

    // let compare = (strPtr) => {
    //     //now start comparing str and pat
    //     let i = tempPat.length - 1;
    //     while (i >= 0) {
    //         if (tempStr[strPtr] != tempPat[i]) {
    //             return badTable[tempPat[i]];
    //         }
    //         i--;
    //         strPtr--;
    //     }
    //     console.log("matched@", strPtr + 1);
    //     return 1;
    // }

    let patTotal = 0;
    for (let i in pat) {
        patTotal += pat[i].charCodeAt();
    }
    console.log(patTotal);

    let strTotal = 0;
    //now loop through the str to get the total
    let l = 0;
    let h = 0;
    let ctr = 0
    console.log(l, h);
    while (l <= h && h < tempStr.length) {
        if (h - l < 4) {
            strTotal += tempStr[h].charCodeAt();
            h++;
        } else {
            strTotal += tempStr[h].charCodeAt();
            strTotal -= tempStr[l].charCodeAt();
            l++;
            h++;
        }
        if (strTotal == patTotal) {
            console.log("match@", l);
        }

    }
}


let str = 'BACDGABCDA';
let pat = 'ABCD'

// let str = 'THIS IS A TEST';
// let pat = "TEST"

searchStr(str, pat);

