// https://www.geeksforgeeks.org/stack-set-2-infix-to-postfix/

const infixToPostFix = (str) => {
    for (let i in str) {
        console.log(str[i]);
    }
}

const init = (str) => {
    console.log(infixToPostFix(str));
}

init("a+b*(c^d-e)^(f+g*h)-i");