// https://www.geeksforgeeks.org/longest-prefix-also-suffix/

const init = str => {
    str = str.split("");
    let mid = Math.floor(str.length / 2);
    let left = str.slice(0, mid);
    let right = str.slice(mid);

    if (right.length % 2 != 0)
        right.splice(0, 1);

    let ptr = 0, final = [];
    while (ptr < right.length && left[ptr] == right[ptr]) {
        final.push(left[ptr++]);
    }

    console.log(final.join(""));
}

// let str = 'aabcdaabc';
// let str = 'abcab';
let str = 'aaaa';
init(str);