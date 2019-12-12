/**
 * responsoble for flattening object
 */

var obj = {
    k1: 1,
    k2: {
        a: 2,
        b: 3,
        c: {
            d: 3,
            e: 4,
            f: 5
        }
    }
}

let finalObj = {}
let ctr = 1;
function flatten(obj) {
    //recursion through the object
    Object.keys(obj).map(function (key) {
        var val = obj[key];
        if (typeof val == "object") {
            flatten(val);
        } else {
            finalObj[key + ctr++] = val;
        }
    });
    console.log(finalObj);
}

flatten(obj);