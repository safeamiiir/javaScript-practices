/**
 * Created by amir on 3/9/18.
 */
function FIB() {
    var first = 1;
    var second = 1;
    var tmp = 0;
    console.log( 1 );
    console.log( 1 );
    for( i = 1; i <= 48; i++){
        tmp = first + second;
        first = second;
        second = tmp;
        console.log(second);
    }
}
FIB();