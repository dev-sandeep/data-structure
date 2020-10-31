/**
 * Merge sort goes here
 */
const merge = (arr1, arr2)=>{
    let ct1 = 0, ct2 = 0, finArr = [];
    while(ct1 < arr1.length && ct2 < arr2.length){
        if(arr1[ct1] < arr2[ct2]){
            finArr.push(arr1[ct1++]);
        }else{
            finArr.push(arr2[ct2++]);
        }
    }

    return finArr.concat(arr1.slice(ct1)).concat(arr2.slice(ct2));
}

const mergeSort = (arr) => {
    if(arr.length < 2)
        return arr;
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    
    return merge(mergeSort(left), mergeSort(right));                                          
}

let temp = mergeSort([9, 3, 1, 8, 2, 12]);
console.log(temp);