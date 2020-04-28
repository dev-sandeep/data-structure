function permute(arr, start, end){
    if(start == end)
        return arr;

    else{
        for(var i = 0; i < end + 1; i++){
            swap(arr, start, i);
            permute(arr, start+1, end);
            swap(arr, start, i);
        }
    }
}

function swap(arr, start, end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}

var x = permute(['a', 'b', 'x', 0, 3]);
console.log(x);

