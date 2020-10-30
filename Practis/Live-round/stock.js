const init = (A)=>{
    let arr = [];
    let initial = 0, lastElem = A[0];
    for(let i = 1; i < A.length; i++){
        if(A[i] < lastElem){
            if(initial !== i-1){
                arr.push([initial, i-1]);
            }
            
            initial = i;
        }
    }
    if(initial != A.length-1)
        arr.push([initial, A.length-1]);

    console.log(arr);
}

// init([100, 180, 260, 310, 40, 535, 695]);
// init([100, 50, 30,20]);
init([23, 13, 25, 29, 33, 19, 34, 45, 65, 67]);