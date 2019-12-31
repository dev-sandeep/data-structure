// https://www.geeksforgeeks.org/dynamic-programming-wildcard-pattern-matching-linear-time-constant-space/

// Text = "baaabab",
// Pattern = “*****ba*****ab", output : true
// Pattern = "baaa?ab", output : true
// Pattern = "ba*a?", output : true
// Pattern = "a*ab", output : false 

// ‘?’ – matches any single character
// ‘*’ – Matches any sequence of characters (including the empty sequence)

let str = 'baaabab';
let pat1 = '*****ba*****ab';
let pat2 = 'baaa?ab';
let pat3 = 'ba*a?';
let pat4 = 'a*ab';

let init = (str, pat) => {
    //check if there is '?'
    str = str.split('');
    let isAstr = false;
    for (let i in str) {
        if (str[i] == '?')
            isAstr = true;
    }

    //case 1
    if (!isAstr && pat.length != str.length) {
        return false;
    }

    //case 2
    
}