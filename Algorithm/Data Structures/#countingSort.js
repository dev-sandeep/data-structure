let init = arr => {
    let obj = {};
    arr.map((el, i) => {
        if (!obj[el])
            obj[el] = 1;
        else
            obj[el]++;
    });
    let final = [], ctr = 0;
    for (var i in obj) {
        ctr = obj[i];
        while (ctr-- > 0)
            final.push(parseInt(i));
    }
    console.log(final);
}

init([1, 4, 1, 2, 7, 5, 2]);