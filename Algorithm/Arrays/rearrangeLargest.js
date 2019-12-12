// https://www.geeksforgeeks.org/rearrange-array-order-smallest-largest-2nd-smallest-2nd-largest/


const swap = (arr, a, b) => {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

    return arr;
}

const init = (arr) => {
    let ctr = 0, maxLen = arr.length - 1;
    /**
     * do the sorting
     */
    let sort = (arr) => {
        var ctr, endCtr = 0, maxLen = arr.length - 1;
        ctr = maxLen;
        while (endCtr != maxLen) {
            //regular condition
            if (arr[ctr] < arr[ctr - 1]) {
                arr = swap(arr, ctr, ctr - 1);
            }
            ctr--;

            if (ctr == (endCtr - 1)) {
                endCtr++;
                ctr = maxLen;
            }
        }
        return (arr);
    }
    arr = sort(arr);
    
    /* now place the biggest and the smallest number  */
    var start = 0, end = arr.length - 1;
    while(start != end){
        
        start++;
        end--;
    }
}
 
init([5, 8, 1, 4, 2, 9, 3, 7, 6]);