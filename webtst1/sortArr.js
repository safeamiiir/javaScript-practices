/**
 * Created by amir on 2/15/18.
 */

var arr = ["aa","bdbef","bb","ccc"];
// var arrNum = [];

function sortArr(array) {

    // for (i = 0; i < array.length; i++) {
    //     arrNum[i].push(array[i].length);
    // }
    // arrNum.sort();
    // for (i = 0; i < arrNum.length; i++) {
    //      console.log(array[i]);
    // }

    array.sort(function(a, b) {
        return a.length - b.length || a.localeCompare(b)
    })

    for (i = 0; i < array.length; i++) {
        console.log(array[i])
    }


}
sortArr(arr);