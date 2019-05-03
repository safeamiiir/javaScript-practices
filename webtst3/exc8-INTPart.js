/**
 * Created by amir on 3/14/18.
 */

var input = 101.0234;
var numArr = 0;
function numSeprator(inp) {
    var tmpimp = inp.toString();
    numArr = tmpimp.split(".");
    return numArr;
}
console.log(numSeprator(input));