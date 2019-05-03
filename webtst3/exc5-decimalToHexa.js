/**
 * Created by amir on 3/9/18.
 */
function ConvertToBinary(dec) {
    var bits = [];
    var dividend = dec;
    var remainder = 0;
    while (dividend >= 16) {
        remainder = dividend % 16;
        bits.push(remainder);
        dividend = (dividend - remainder) / 16;
    }
    bits.push(dividend);
    bits.reverse();
    for(i = 0; i < bits.length; i++){
        switch (bits[i]){
            case 10:
                bits[i] = 'a';
                break;
            case 12:
                bits[i] = 'b';
                break;
            case 13:
                bits[i ] = 'c';
                break;
            case 14:
                bits[i] = 'd';
                break;
            case 15:
                bits[i] = 'e';
                break;
        }

    }
    return bits.join("");
}

console.log(ConvertToBinary(17));

