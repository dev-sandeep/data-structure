// function waysToCoverSteps(step) {
//     if (step < 0) return 0;
//     if (step == 0) return 1;
//     return waysToCoverSteps(step - 1) + waysToCoverSteps(step - 2) +
//         waysToCoverSteps(step - 3);
// }
// waysToCoverSteps(12);

function getAllPermutation(string) {
    var result = [];

    if (string.length == 1) {
        result.push(string);
        return result;
    }

    for(var i = 0; i < string.length; i++){
        var firstString = string[i];
        chars
    }
}