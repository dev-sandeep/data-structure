const init = (A)=>{
    let maxSumSoFAr = 0, maxSoFar = 0;

    for(let i = 0; i < A.length; i++){
        maxSumSoFAr += A[i];

        if(maxSumSoFAr < 0)
            maxSumSoFAr = 0;

        if(maxSumSoFAr > maxSoFar)
            maxSoFar = maxSumSoFAr;
    }   
    
    console.log(maxSoFar);
}

// init([-2, -3, 4, -1, -2, -90, 1, -1, 15, -1, 21, -3]);

// init([-2, -3, -4, -1, -2, -1, -5, -3]);
// mssf = -2, msf = -9999;
// mssf = Math.max(mssf, mssf + A[i]);
// msf = Math.max(mssf, msf)