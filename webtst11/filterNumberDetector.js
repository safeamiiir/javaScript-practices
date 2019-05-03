app.filter('numberDetector' , function () {
    return function (input) {
        var enLetters = /[0-9]/;
        var peLetters = /[۰-۹]/;
        if ( input === undefined ){
            return "";
        }


        else if ( input.match(enLetters)  ){
            console.log("Sarted");
            for( var i = 1; i < input.length; i++ ){
                if ( !input[i].match(enLetters)){
                    console.log(" I input A : ", input[i]);
                    $('#number').css('background-color','red');
                    return "Invalid Input! ";
                }
            }
            $('#number').css('background-color','green');
            return "You Number : " + input;
        }
        else if ( input.match(peLetters)  ){
            for( var i = 1; i < input.length; i++ ){
                if ( !input[i].match(peLetters)){
                    console.log(" I input B : ", input[i]);
                    $('#number').css('background-color','red');
                    return "Invalid Input! ";
                }
            }
            console.log("valid here ");
            $('#number').css('background-color','green');
            return "You Number : " + input;

        }
        else{
            $('#number').css('background-color','red');
            return "Invalid Input! ";
        }

        // var str = String(input);
        // var tmp = str.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function(d) {
        //     return d.charCodeAt(0) - 1632; // Convert Arabic numbers
        // }).replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function(d) {
        //     return d.charCodeAt(0) - 1776; // Convert Persian numbers
        // });
        // return !isNaN(tmp) && angular.isNumber(+tmp);

    }
});