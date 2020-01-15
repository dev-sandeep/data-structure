var text;
text = 12;
console.log(text);
text = "Sandeep";
console.log(text);
function disp(txt) {
    if (typeof txt == 'number') {
        console.log(txt);
    }
    else {
        console.log(txt.length);
    }
}
disp(12);
disp([1, 2, 3]);
