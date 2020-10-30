const init = (arr)=>{
    const len = arr.length;
    
    let max1 = -1, max2 = -1, max3 = -1;
    for(let i = 0; i < len; i++){
        if(arr[i] > max1){
            max3 = max2;
            max2 = max1;
            max1 = arr[i];
        }else if(arr[i] > max2){
            max3 = max2;
            max2 = arr[i];
        }else if(arr[i] > max3){
            max3 = arr[i];
        }
    }

    console.log(max1, max2, max3);
}
const arr = [10, 24, 3, 50, 23, 90, 0];
init(arr, 3);