/**
 * The great string search
 */

let text = 'geeksforgeeks';
let match = 'geeks';

var ctrText = 0, ctrMatch = 0;

const compare = (text, match) => {
    if (text[ctrText] == match[ctrMatch]) {
        ctrMatch++;
    } else {
        ctrMatch = 0;
    }

    if (ctrMatch == match.length) {
        ctrMatch = 0;
        console.log("Eureka!");
    }

    ctrText++;
    if (ctrText < text.length) {
        compare(text, match);
    }
}

compare(text, match);