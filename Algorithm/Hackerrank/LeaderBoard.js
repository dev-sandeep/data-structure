// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

let setElem = (main, score) => {
    for (let i in main) {
        if (main[i] < score) {
            main.splice(0, i)
        }
    }
}

let init = (main, alice) => {
    let arr = [];
    //pushing element
    for (i in alice) {

    }
}

init([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]);