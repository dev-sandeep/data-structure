// // refer: https://www.youtube.com/watch?v=Tbj8iH9UkSA
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

    let compare = (strPtr) => {
        //now start comparing str and pat
        let i = tempPat.length - 1;
        while (i >= 0) {
            if (tempStr[strPtr] != tempPat[i]) {
                return badTable[tempPat[i]];
            }
            i--;
            strPtr--;
        }
        console.log("matched@", strPtr + 1);
        return 1;
    }

    while (strPtr < tempStr.length) {
        if(tempStr[strPtr] != tempPat[patPtr]){
            strPtr += badTable[tempStr[strPtr]] || tempPat.length - 1;
        }else{
            strPtr += compare(strPtr);
        }
        
    }
}


// let str = 'BACDGABCDA';
// let pat = 'ABCD'

let str = 'THIS IS A TEST';
let pat = "TEST"

searchStr(str, pat);


// const makeBadTable = (str) => {
//     let obj = {};
//     let size = str.length;
//     let ctr = 0;

//     while (ctr < size) {
//         calculatedIndex = size - ctr - 1;
//         obj[str[ctr]] = calculatedIndex > 1 ? calculatedIndex : 1;
//         ctr++;
//     }
//     return obj;
// }

// const init = (str, pat) => {
//     let patSize = pat.length;
//     let badTable = makeBadTable(pat);
//     let i = patSize - 1;
//     let j = i;

//     /**
//      * this is where actual coparing happens 
//      */
//     let matchRev = (i) => {
//         let tempPat = pat.slice(0);
//         let tempStr = str.slice(0);
//         j = tempPat.length - 1;
//         while (j >= 0) {
//             if (tempPat[j] != tempStr[i]) {
//                 // console.log("mismatch", i, j, tempStr[i], tempPat[j]);
//                 // console.log(badTable, tempPat[j], j);
//                 return badTable[tempPat[j]];
//                 //return the shift from bad table
//             }
//             // else{
//             //     // console.log("match", i, j, tempStr[i], tempPat[j]);
//             // }

//             j--;
//             i--;
//         }
//         console.log("matched@", i+1);
//         //all is awesome = "there is a match"
//         return tempPat.length - 1;
//     }

//     while (i < str.length) {
//         // console.log(">", str[i], pat[j], i);
//         // if (str[i] == pat[j]) {//last character of pattern and main string is matching
//         //check internal match
//         i += matchRev(i);
//         j = pat.length - 1;
//         // }
//         // console.log(">>", i);
//     }
// }

// let str = 'ABCABDAB';
// let pat = "ABDAB"
// // let str = 'GCAATGCCTATGTGACC';
// // let pat = "TATGTG"
// init(str, pat);
