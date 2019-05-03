/**
 * Created by amir on 5/3/18.
 */
$('nav li ul').hide().removeClass('fallback');
$('nav li').hover(
    function () {
        $('ul', this).stop().slideDown(100);
    },
    function () {
        $('ul', this).stop().slideUp(100);
    }
);