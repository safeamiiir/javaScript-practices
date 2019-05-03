app.filter('myFunc', function () {

    return function(input, optional) {
        // var output;
        // console.log(input);
        // console.log(optional);
        // return output;
        var random = optional;
        var arr = [];
        var string = input;

        if ( string === undefined ){
            console.log("");
            return "";
        }
        else {
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
            return rndmCaptilize(string);

        }
    }

});

app.filter('mySecondFunc', function () {
   return function (input) {
       if( input === undefined )
           return "";
       else {
           console.log(input);
           return input
       }
   }
});

app.filter('numberDetector' , function () {
   return function (input) {
       var enLetters = /[0-9]/;
       var peLetters = /[۰-۹]/;
       if ( input === undefined )
           return "";

       else if ( input.match(enLetters)  ){
           console.log("Sarted");
           for( var i = 1; i < input.length; i++ ){
               if ( !input[i].match(enLetters)){
                   console.log(" I input : ", input[i]);
                   return "Invalid ! ";
               }
           }
           return input;
       }
       else if ( input.match(peLetters)  ){
           for( var i = 1; i < input.length; i++ ){
               if ( !input[i].match(peLetters)){
                   console.log(" I input : ", input[i]);
                   return "Invalid ! ";
               }
           }
           return input;
       }
       else
           return "Invalid !";

       // var str = String(input);
       // var tmp = str.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function(d) {
       //     return d.charCodeAt(0) - 1632; // Convert Arabic numbers
       // }).replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function(d) {
       //     return d.charCodeAt(0) - 1776; // Convert Persian numbers
       // });
       // return !isNaN(tmp) && angular.isNumber(+tmp);

   }
});