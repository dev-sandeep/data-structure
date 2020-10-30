const init = (limit)=>{
    //variable to initiate the fibonaci series calculation
    let first = 0, second = 1, sum = 0;
    let third = first + second;
    //checking the limit
    while(third <= limit){
        //if third is even then add up
        if(third % 2 == 0){
            sum += third;
        }
        first = second;
        second = third;
        //update the third
        third = first + second;
    }
    return sum;
}

init(100);