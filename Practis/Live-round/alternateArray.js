const init = (A) => {
    let arr = [];
    let i = 0, j = A.length - 1;
    while(i < j){
        arr.push(A[j]);
        arr.push(A[i]);
        i++;
        j--;
    }

    if(i == j){
        arr.push(A[i]);
    }

    console.log(arr);
}

init([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]);