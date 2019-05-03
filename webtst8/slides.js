/**
 * Created by amir on 5/3/18.
 */
$(document).ready(function(){
    $("#slideUp").click(function(){
        $(".content").slideUp()
    });

    $("#slideDown").click(function(){
        $(".content").slideDown();
    });

    $("#toggle").click(function(){
        $(".content").slideToggle();
    });
});
