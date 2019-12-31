// https://www.geeksforgeeks.org/find-count-number-given-string-present-2d-character-array/

let init = arr => {
    let horizontal = [], vertical = [];
    let temp;
    for (let i in arr) {
        temp = arr[i].join('');
        horizontal.push(temp);
    }

    horizontal = horizontal.join(" ");

    let obj = {};
    //convert in to obj
    for (let i in arr) {
        for (let j in arr) {
            if (!obj[j])
                obj[j] = [];

            obj[j].push(arr[i][j]);
        }
    }

    //convert the object to string
    for(let i in obj){
        vertical.push(obj[i].join(""));
    }
    vertical = vertical.join(" ");

    console.log(horizontal);
    console.log(vertical);

    //now implement the search by ASCII character
}

let arr = [
    ['D', 'D', 'D', 'G', 'D', 'D'],
    ['B', 'B', 'D', 'E', 'B', 'S'],
    ['B', 'S', 'K', 'E', 'B', 'K'],
    ['D', 'D', 'D', 'D', 'D', 'E'],
    ['D', 'D', 'D', 'D', 'D', 'E'],
    ['D', 'D', 'D', 'D', 'D', 'G']
];

init(arr);