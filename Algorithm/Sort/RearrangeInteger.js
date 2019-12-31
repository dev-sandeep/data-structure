// https://www.geeksforgeeks.org/rearrange-positive-and-negative-numbers/

const init = (arr) => {
    let ctr = 0, tmp, max = arr.slice(0);
    max = max.length;
    for(let i = 0; i < max; i++){
        if(arr[i] > 0){
            arr.push(arr[i]);
            arr.splice(i, 1);
        }
    }
    console.log(arr);
}
init([-12, 11, -13, -5, 6, -7, 5, -3, -6]);
//output: [ -12, -13, -5, -7, -3, -6, 6, 11, 5 ]