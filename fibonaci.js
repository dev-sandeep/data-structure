//n - nth element of the series
function getFibo(n) {
    if (n < 2) {
        return n
    } else {
        return getFibo(n - 1) + getFibo(n - 2);
    }
}

console.log(getFibo(1))
