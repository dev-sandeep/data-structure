const init = (arr)=>{
    let rightSum = 0;
    arr.map((el)=>{
        rightSum += el;
    });
    let count = 0;
    //traverse
    let leftSum = 0;
    arr.map((el, i)=>{
        
        
        if(leftSum == rightSum){
            console.log(i);
        }
        leftSum += el;
        rightSum -= el;
    });
}

// init([1,4,2,-2,5]);
// init([7,-2,-2,2,5]);
init([4,-1,0,3]);