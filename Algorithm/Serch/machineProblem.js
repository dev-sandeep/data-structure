// https://www.geeksforgeeks.org/minimum-time-required-produce-m-items/

const init = (arr, total) => {
    // let maxTime = total / arr[0];
    let sec = 0;
    let output = 0;
    while (sec++ < 100) {
        for (var i in arr) {
            if (sec % arr[i] == 0)
                output++;
        }

        if (output >= total) {
            console.log("RES:", sec);
            return sec;
        }
    }
    console.log("OoPS", sec);
}

init([5, 6], 11);