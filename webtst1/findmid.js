/**
 * Created by amir on 2/15/18.
 */


//var a = "12";

function findMid(str){
    if(str.length < 3 || str.length % 2 === 0){
        console.log("Err");
    }
    else {
        var strlength = str.length;
        var strlenghth_three = ( strlength - 3 ) / 2
        var res = str.substring(strlenghth_three, strlenghth_three + 3);
        return res;
    }
}





