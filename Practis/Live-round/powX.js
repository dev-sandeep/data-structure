const init = (A, B)=>{
    let ctr = 0;
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < B.length; j++){
            if(Math.pow(A[i], B[j]) > Math.pow(B[j], A[i])){
                console.log(A[i], B[j]);
                ctr++;
            }
        }
    }

    console.log(ctr);
}

init([2,1,6,10], [1,5,2]);

//