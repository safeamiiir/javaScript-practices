/**
 * Created by amir on 2/17/18.
 */
function isPrime(number) {
    if (typeof number !== 'number' || !Number.isInteger(number)) {
        return "It Is Not Prime Number !";
    }

    if (number < 2) {
        return "It Is Not Prime Number !";
    }

    if (number === 2) {
        return "It Is Prime Number !";
    } else if (number % 2 === 0) {
        return "It Is Not Prime Number !";
    }

    for (var i = 3; i*i <= number; i += 2) {
        if (number % i === 0) {
            return "It Is Not Prime Number !";
        }
    }
    return "It Is Prime Number !";

}
console.log(isPrime(2));