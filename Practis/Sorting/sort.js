//sellection sort goes here
const selectionSort = (arr)=>{
    const maxCtr = arr.length;
    let ctr = 0;
    let minObj = {};
    //loop through the items to find the minimum
    while(ctr < maxCtr){
      minObj = findMin(arr, ctr);
      //swap now
      arr = swap(arr, ctr, minObj.index);
      ctr++;
    }
    
    console.log(arr);
    return arr;
  }

//bubble sort
const bubbleSort = (arr, start = 0)=>{
    //traverse the array from rigth to left
    const maxCtr = arr.length;
    let ctr = maxCtr - 2;
    while(ctr >= start){
        if(arr[ctr] > arr[ctr+1]){
            arr = swap(arr, ctr, ctr+1);
        }
        ctr--;
    }

    //have recursion to skip the first element
    if(start <= maxCtr)
        return bubbleSort(arr, ++start);
    else    
        return arr;
}

//insertion sort
const insertSort = (arr)=>{
    let ctr = 0;
    const maxCtr = arr.length;
    while(ctr < maxCtr - 1){
        if(arr[ctr] > arr[ctr+1]){
            //ctr+1 is the culprit, lets rearrange
            arr = rearrangeArr(arr, ctr+1);
        }
        ctr++;
    }

    console.log(arr);
}

//merge sort
const mergeSort = (arr)=>{
    if(arr.length < 2)
        return arr;

    let mid = Math.floor(arr.length / 2);
    //dividing the array into 2 equal parts
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (arr1, arr2)=>{
    //sort while merging 2 arrays
    let finalArr = [];
    let maxCtr1 = arr1.length;
    let maxCtr2 = arr2.length;
    let ctr1 = 0, ctr2 = 0;
    while(ctr1 < maxCtr1 && ctr2 < maxCtr2){
        if(arr1[ctr1] < arr2[ctr2]){
            finalArr.push(arr1[ctr1]);
            ctr1++;
        }else{
            finalArr.push(arr2[ctr2]);
            ctr2++;
        }
    }

    let remainArr1 = arr1.slice(ctr1);
    let remainArr2 = arr2.slice(ctr2);
    return finalArr.concat(remainArr1).concat(remainArr2);
}

//quick sort
const quickSort = (arr, l, h) => {

    if(l < h){
      let pi = partition(arr, l, h);
      quickSort(arr, l, pi - 1);
      quickSort(arr, pi, h);
    }
    
    return arr;
  }
  
  const partition = (arr, l, h)=>{
    let mid = Math.floor((l+h)/2);
    
    while(l <= h){
    
      while(arr[l] < arr[mid])
        l++;
      
      while(arr[h] > arr[mid])
        h--;
      
      if(l <= h){
        swap(arr,l ,h);
        l++;
        h--;
      }
    }
    
    return l;
  }
  ///

const rearrangeArr = (arr, i)=>{
    let num = arr[i];
    let index = arr.findIndex((e)=>e > arr[i]);
    arr.splice(i, 1);
    arr.splice(index, 0, num);
    return arr;
}

const swap = (arr, i, j)=>{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

const findMin = (arr)=>{
    let lnum = arr[0];
    let index = 0;
    arr.map((e, i)=>{
        if(e < lnum){
            lnum = e;
            index = i;
        }
    });

    return {lnum, index};
}

let x = mergeSort([11,9,6,41,2,4,6,1]);
console.log(x);