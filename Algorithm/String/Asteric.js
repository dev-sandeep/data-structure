// https://www.geeksforgeeks.org/program-censor-word-asterisks-sentence/

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
    str = str.split("");
    pat = pat.split("");

    let tempStr = str.slice(0);
    let tempPat = pat.slice(0);

    let patPtr = tempPat.length - 1;
    let strPtr = patPtr;

    let badTable = makeBadTable(pat);

    let compare = (strPtr) => {
        //now start comparing str and pat
        let pt = strPtr;
        let i = tempPat.length - 1;
        while (i >= 0) {
            if (tempStr[strPtr] != tempPat[i]) {
                return badTable[tempPat[i]];
            }
            i--;
            strPtr--;
        }
        // console.log("matched@", strPtr + 1);
        replaceAsteric(strPtr + 1, pt);
        return 1;
    }

    let replaceAsteric = (start, end) => {
        for (let i = start; i <= end; i++) {
            // console.log(tempStr[i]);
            // tempStr.slice(i, 1, '*');
            // console.log(tempStr[i]);
            tempStr.splice(i, 1, "*");
        }
    }

    while (strPtr < tempStr.length) {
        if (tempStr[strPtr] != tempPat[patPtr]) {
            strPtr += badTable[tempStr[strPtr]] || tempPat.length - 1;
        } else {
            strPtr += compare(strPtr);
        }

    }

    console.log(tempStr.join(""));
}


let word = "computer";
let text = `GeeksforGeeks is a computer science portal for geeks. 
People who love computer and computer codes can contribute their valuables/ideas on computer codes/structures on here.`;
searchStr(text, word);