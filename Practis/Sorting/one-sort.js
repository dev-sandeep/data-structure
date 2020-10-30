/**
 * Implementation of bubble sort
 * @param {Array} A 
 */
const bubbleSort = (A)=>{
    //the outer loop
    for(let i = 0; i < A.length; i++){
        //the inner loop
        for(let j = i; j < A.length - 1; j++){
            if(A[j] > A[j + 1])
                swap(A, j, j+1);
        }
    }

    return (A);
}

/**
 * Implementation of selection sort
 * @param {Array} A 
 */
const selectionSort = (A)=>{
    for(let i = 0; i < A.length; i++){
        let minIndex = minElement(A, i);
        swap(A, i, minIndex);
    }

    return A;
}

/**
 * Implementation of merge sort
 * @param {Array} A 
 */
const mergeSort = (A)=>{
    if(A.length < 2)
        return A;
    
    let mid = Math.floor(A.length/2);
    let left = A.slice(0, mid);
    let right = A.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

/**
 * Implementation of quick sore
 * @param {Array} A 
 * @param {Integer} l 
 * @param {Integer} h 
 */
const quickSort = (A, l, h)=>{
    if(l < h){
        let pi = partition(A, l, h);
        //pi is at the right place

        /* partitioning the Array */
        quickSort(A, l, pi - 1);
        quickSort(A, pi, h);
    }

    return A;
}

/**
 * Responible for rearranging the array to a perfect point
 * where all the elements at left will be smaller 
 * and all the elements at the roght will be bigger
 * @param {Array} arr 
 * @param {Integer} l 
 * @param {Integer} h 
 */
const partition = (arr, l, h)=>{
    let mid = Math.floor((l+h)/2);
    while(l <= h){
        while(arr[l] < arr[mid])
            l++;
        while(arr[h] > arr[mid])
            h--;

        if(l <= h){
            swap(arr, l, h);
            l++;
            h--;
        }
    }

    return l;
}

/**
 * Merging process used in mergesort
 * @param {Array} left 
 * @param {Array} right 
 */
const merge = (left, right)=>{
    let l = 0, r = 0, arr = [];
    while(l < left.length && r < right.length){
         if(left[l] < right[r]){
            arr.push(left[l++]);
         }else{
            arr.push(right[r++]);
         }
    }

    return arr.concat(left.slice(l)).concat(right.slice(r));
}



/**
 * Responsible for getting the minimum element's index
 * @param {Array} A 
 * @param {*} start 
 */
const minElement = (A, start)=>{
    let min = Number.MAX_SAFE_INTEGER;
    let index = -1;
    for(let i = start; i < A.length; i++){
        if(A[i] < min){
            index = i;
            min = A[i];
        }
    }
    return index;
}

/**
 * Responsible for swapping elements in array
 * @param {Array} A 
 * @param {*} x 
 * @param {*} y 
 */
const swap = (A, x, y)=>{
    let temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}

/**
 * THE KICKSTARTER
 * @param {Array} A 
 */
const init = (A)=>{
    let x = quickSort(A, 0, A.length - 1);
    console.log("quick sort", x);
}

init([1,6,2,5,2,12,3,11]);