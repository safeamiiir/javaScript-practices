/**
 * Created by amir on 3/9/18.
 */
var array1 = [7,2,3,8,9,10];
var array2 = [1,2,3,4,5,6,7];
var outArr = [];
function subChecker(ar1,ar2) {
    for(i = 0; i < ar1.length; i++ ){
        for(j = 0; j < ar2.length; j++){
            if( ar1[i] === ar2[j] ){
                outArr.push(ar1[i]);
            }
        }
    }
    return outArr;
}
console.log(subChecker(array1,array2));