/**
 * Created by amir on 3/9/18.
 */
function isPrime(number) {
    if (typeof number !== 'number' || !Number.isInteger(number)) {
        return false;
    }

    if (number < 2) {
        return false;
    }

    if (number === 2) {
        return true;
    } else if (number % 2 === 0) {
        return false;
    }

    for (var i = 3; i*i <= number; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
for( i = 1; i <= 1000; i++){
    if(isPrime(i)){
        console.log(i);
    }
}