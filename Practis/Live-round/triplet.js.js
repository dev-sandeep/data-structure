const init = (A)=>{
    //triplets
    let obj = {};
    for(let i = 0; i < A.length; i++){
        obj[A[i]] = true;
    }
    let sum, count = 0;
    for(let j = 0; j < A.length - 1; j++){
        for(let k = j+1; k < A.length; k++){
            sum = A[j] + A[k];

            if(obj[sum]){
                count++;
            }
        }
    }

    console.log(count);
}

init([1,2,3,4,4,7,8]);