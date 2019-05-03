/**
 * Created by amir on 4/20/18.
 */
let x1 = 1 , x2= 1 , x3 = 1;
let p1 = $.getJSON("https://restcountries.eu/rest/v2/name/iran");
let p2 = $.getJSON("https://restcountries.eu/rest/v2/name/iraq");
let p3 = $.getJSON("https://restcountries.eu/rest/v2/name/afghanistan");
$.when(p1,p2,p3).done(function(data1,data2,data3) {
    x1 = data1[0][0].population;
    x2 = data2[0][0].population;
    x3 = data3[0][0].population;
    console.log(x1 + x2 + x3);
});