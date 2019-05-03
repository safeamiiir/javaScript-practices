/**
 * Created by amir on 3/9/18.
 */

var arr = [1,2,3,4,5,6];

function avr(numbers) {
    var tmp = 0;
    for(i = 0; i < numbers.length; i++){
        tmp += numbers[i];
    }
    return tmp / numbers.length;
}
// console.log(avr(arr));

function deviation(numbers) {
    var sig = 0;
    for(i = 0; i < numbers.length; i++){
        var tmp;
        tmp = Math.pow(numbers[i] - avr(numbers),2);
        sig += tmp;
    }
    return ( Math.sqrt( sig / numbers.length ) );
}

console.log(deviation(arr));

