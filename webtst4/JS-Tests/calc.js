/**
 * Created by amir on 3/15/18.
 */
var calculator = {
    read(){
        this.inp1  =+ prompt('num1?','');
        this.inp2  =+ prompt('num1?','');
    },
    sum(){
        return this.inp1 + this.inp2;
    },
    mul(){
        return this.inp1 * this.inp2;
    }
};


calculator.read();
alert(calculator.sum());
alert(calculator.mul());