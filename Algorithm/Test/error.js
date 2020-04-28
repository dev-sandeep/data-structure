function ensure(value) {
    // Your code goes here
    if (value == undefined)
        throw "value is not defined";
    value = new Boolean(value);
    if (value)
        return value;
}

try {
    console.log(ensure(12));
} catch (err) {
    console.log(err);
} 