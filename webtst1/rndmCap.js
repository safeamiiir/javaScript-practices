/**
 * Created by amir on 2/15/18.
 */
var random = Math.floor((Math.random() * 10));
var arr = [];
var string = "never give up";
for (i = 0; i <= string.length; i ++) {
    if(string.charAt(i-1) === " "){
        arr.push(i);
    }
}
string = string.replace(/ /g,'');
function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

 function rndmCaptilize(str) {
     for (i = random; i <= str.length; i = i+random) {
         //console.log(i);
         str = replaceAt(str,i-1,str.charAt(i-1).toUpperCase());
     }
     for (i = 0; i < string.length; i++) {
         str = [str.slice(0, arr[i]-1), " ",str.slice(arr[i]-1)].join('');
     }

     return str;
}
console.log(rndmCaptilize(string));