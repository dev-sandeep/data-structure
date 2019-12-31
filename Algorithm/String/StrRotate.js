// https://www.geeksforgeeks.org/find-minimum-shift-longest-common-prefix/

let badTable = (str) => {
    let obj = {}, index;
    for (let i in str) {
        index = str.length - 1 - i;
        obj[str[i]] = index > 1 ? index : 1;
    }
    return obj;
}

let search = (str1, str2) => {
    let badTbl = badTable(str2);
    
    const matchStr = (i) => {
        let tem1 = str1.slice(0);
        let tem2 = str2.slice(0);
        console.log(tem1, tem2);
        let p2 = tem2.length - 1;
        while (p2 >= 0) {
            console.log(tem1[i], tem2[p2]);
            if (tem1[i] == tem2[p2]) {
                i--;
                p2--;
            } else {
                return badTbl[tem1[i]];
            }
        }
        return 1;
    }
    let size = str2.length;
    let p1 = size - 1, p2 = size - 1;

    while (p1 < str1.length) {
        // console.log(str1[p1], str2[p2]);
        //comparing the last element
        if (str1[p1] == str2[p2]) {
            p1 += matchStr(p1);
        } else {
            //increment
            p1 += badTbl[str1[p1]];
        }
    }
}

let check = (str1, str2) => {
    str2 += str2;
    search(str2, str1)
}

// let str1 = "geeksforgeeks";
// let str2 = "forgeeksgeeks";
let str1 = "geeks";
let str2 = "dgeek";
check(str1, str2);