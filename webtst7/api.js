
let countriesUrl = "https://restcountries.eu/rest/v2/all";
let weatherUrlCompleted;
let flag = true;
let countryLat = 33;
let countryLng = 65;
// AIzaSyBNGPPsrpte_O32TwpyYhPog6PdPKLH194
//////////////////////////////////////////////////////////
//                  Variables
////////////////////////////////////////////////////////


function requestJsonForThisUrl(countriesUrlInp) {
    let p = $.getJSON(countriesUrlInp);
    $.when(p).done(function (data) {
        if(flag)
            selectorOptionsSetter(data);
        countryDescriptionFills(data);
        weatherFinderByCityName(data);
    });
}
//////////////////////////////////////////////////////////
//  It Gets The Countries Via AJAX
//////////////////////////////////////////////////////////



function requestJsonForThisUrl2(countriesUrlInp) {
    let p = $.getJSON(countriesUrlInp);
    $.when(p).done(function (data) {
        console.log(data);
        weatherInfoSetter(data);
    });
}
//////////////////////////////////////////////////////////
//  It Gets The Countries Via AJAX
//////////////////////////////////////////////////////////



function selectorOptionsSetter(country) {
    let select = document.getElementById("selector");
    for ( element in country){
        let option = document.createElement('option');
        option.innerHTML = country[element].name;
        select.appendChild(option);
    }
    flag = false;
}
//////////////////////////////////////////////////////////
//  It Sets AND Generate Options For Selector
//////////////////////////////////////////////////////////




function countryDescriptionFills(country) {
    let selectedCountry = document.getElementById('selector');
    let option = selectedCountry.options[selectedCountry.selectedIndex].value;
    for( element in country){
        if ( country[element].name === option){

            countryLat = Number(country[element].latlng[0]);
            countryLng = Number(country[element].latlng[1]);

            initMap();


            let description = option + "<br> Native name : " + option + "<br> Capital : "
                + country[element].capital  + "<br> Region : " +
                country[element].region + " , " +
            country[element].subregion
                + "<br> population : " + country[element].population +
                " <br> Languages : " + country[element].languages[0].name +
                " <br> TimeZones : " + country[element].timezones;
            document.getElementById('countryDescription').innerHTML = description;

            let callingCode = country[element].callingCodes;
            document.getElementById('countryCallingCode').innerHTML = "+" + callingCode;

            let flagUrl = country[element].flag;
            document.getElementById('countryFlag').src = flagUrl;
        }
    }
}
//////////////////////////////////////////////////////////
//          It fills Country Description
//          It fills Country Flag
//////////////////////////////////////////////////////////



function weatherFinderByCityName(city) {
    let selectedCountry = document.getElementById('selector');
    let option = selectedCountry.options[selectedCountry.selectedIndex].value;
    let weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    for( element in city){
        if ( city[element].name === option){
            weatherUrlCompleted = weatherUrl + city[element].capital + "&appid=c53e7ed9b22105cdcc528e79ec4eb062&units=metric";
            requestJsonForThisUrl2(weatherUrlCompleted);
        }
    }
}
//////////////////////////////////////////////////////////
//          It Gets The data information
//////////////////////////////////////////////////////////




function weatherInfoSetter(city) {
    document.getElementById('weatherInfo').innerHTML = "Wind Speed : " + city['wind'].speed +
        "  Meter/Sec <br> Temprature : " + city['main'].temp + "  Celsius <br> Humidity : " + city['main'].humidity +
        "  % <br> Visibility : " + city['visibility'] + "  Meter";

    let png = "http://openweathermap.org/img/w/";
    png = png + city['weather'][0].icon + ".png";
    document.getElementById('weatherIcon').src = png ;
}
//////////////////////////////////////////////////////////
//          It Sets The Weather  information
//          It Sets The ICON For Weather Info
//////////////////////////////////////////////////////////





function initMap() {
    let uluru = {lat: countryLat, lng: countryLng };
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: uluru
    });
    let marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
//////////////////////////////////////////////////////////
//         Google APIs
//////////////////////////////////////////////////////////



function main() {
    requestJsonForThisUrl(countriesUrl);
}
main();