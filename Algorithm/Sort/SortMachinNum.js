// https://www.geeksforgeeks.org/sort-numbers-stored-on-different-machines/

//IMPLEMMENT THE HEAP SORT
const init = (bigArr) => {
    let arr = [];
    for (let i in bigArr)
        arr = arr.concat(bigArr[i]);

    arr = arr.sort();
    console.log(arr);
}

init([[30, 40, 50], [35, 45], [10, 60, 70, 80, 100]]);