// Linear Search
const linearSearch = (arr, search)=>{
    console.log("Linear search =>");
    for(let i = 0; i < arr.length; i++ ){
        if(arr[i] == search)
            return i;
    }
}


//binary search
const binarySearch_old = (arr, x)=>{
    console.log("binary search =>");
    
    //recursion function
    const recur = (arr, l, h, x)=>{
        let mid = Math.floor((l+h)/2);

        if(arr[mid] == x)
            return mid;

        if(l > h)
            return -1;

        if(x > arr[mid]){
            l = mid + 1;
        }else if(x < arr[mid]){
            h = mid - 1;
        }
        
        return recur(arr, l, h, x);
    }

    //main function
    return recur(arr, 0, arr.length - 1, x);
}

const binarySearch = (arr, x)=>{
    
    const recur = (arr, l, h, x)=>{
        let mid = Math.floor((l+h)/2);
        if(arr[mid] == x){
            return mid;
        }

        if(l > h)
            return -1;
        
        if(x < arr[mid]){
            h = mid - 1;
        }else if(x > arr[mid]){
            l = mid + 1;
        }

        return recur(arr, l, h, x);
    }

    return recur(arr, 0, arr.length - 1, x);
}
//linearSearch([11,2,21,3,4,5,16,6]);
//binarySearch([1,2,3,4,5,6,7,8,9,10], 10);
let x = binarySearch([1,2,3,4,5,6,7,8,9,10], 101);
console.log(x);


