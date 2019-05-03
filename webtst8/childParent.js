/**
 * Created by amir on 5/3/18.
 */
$('#parentButton').click( function () {
    var a = $('.parent').text();
    $('.target').prepend(a);
});


$('#childButton').click( function () {
    var b = $('.main').text();
    $('.target').prepend(b);
});

