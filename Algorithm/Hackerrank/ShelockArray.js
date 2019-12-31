// https://www.hackerrank.com/challenges/sherlock-and-array/problem

const init = arr => {
    let left = 0, right = arr.length - 1;
    let sumLeft = 0, sumRight = 0;

    while (left < right) {

        if (left == right || sumLeft == sumRight) {
            sumLeft += parseInt(arr[left]);
            sumRight += parseInt(arr[right]);
            left++;
            right--;
        }
        else if (sumLeft < sumRight) {

            sumLeft += parseInt(arr[left]);
            left++;
        }

        else {

            sumRight += parseInt(arr[right]);
            right--;
        }
    }
    
    if(sumRight == 0 || sumLeft == 0)
        return "YES";
    return parseInt(sumLeft) === parseInt(sumRight) ? "YES" : "NO"
}
console.log(init([2, 0, 0, 0]));