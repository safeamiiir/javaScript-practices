/**
 * Created by amir on 3/9/18.
 */
var num = 1432542;
var arr = [];


while( num / 10 > 0){
    var single;
    single = num % 10;
    arr.push(single);
    Math.floor(single);
    num = Math.floor(num / 10);
}
arr.reverse();
console.log(arr);