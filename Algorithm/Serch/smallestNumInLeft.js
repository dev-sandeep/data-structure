// https://www.geeksforgeeks.org/find-the-nearest-smaller-numbers-on-left-side-in-an-array/

const init = (arr) => {
    let min = arr[0];
    let lastMin = arr[0];
    let finalArr = [];

    for (var index in arr) {


        if (index == 0 || arr[index] == 0)
            finalArr.push("_");
        else {
            let lastNum = arr[index - 1];
            if (arr[index] < min) {
                min = arr[index];
            }
            if (lastNum < arr[index])
                lastMin = lastMin;
            //if the last number is smaller
            if (lastNum < arr[index])
                finalArr.push(lastNum);
            //if the last num is bigger
            else if (lastNum > arr[index]) {
                finalArr.push(lastMin);
            }
        }
    }

    console.log(finalArr);
}

init([1, 3, 0, 2, 5]);