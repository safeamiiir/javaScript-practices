/**
 * Created by amir on 3/14/18.
 */
var string = "progress report template elementary schoooool";
function removeConsecutiveRepeatedCharacters(str) {
    var i = str.length;
    var spaces = [];
    while(i--) {
        // console.log(str.charAt(str.length - i - 1 ));
        if( str.charAt(str.length - i - 1) === str.charAt(str.length - i)  ){
            str = str.slice(0, str.length - i - 1) + str.slice(str.length - i);
        }
    }
    for (var i = 0; i < str.length; i++) {
        if( str.charAt(str.length - i - 1) === str.charAt(str.length - i + 1) && str.charAt(str.length - i) === " " ){
            console.log(str.charAt(str.length - i - 1));
            str = str.slice(0, str.length - i + 1) + str.slice(str.length - i + 2);
        }
    }

    return str;
}
console.log(removeConsecutiveRepeatedCharacters(string));