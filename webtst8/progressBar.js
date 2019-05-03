/**
 * Created by amir on 5/4/18.
 */
var counter = 10;

function progress(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth }, 200).html(percent + "% ");
}

function pluser($element) {
    if (counter <= 100){
        progress(counter,$element);
        counter += 10;
    }
}

function reset($element) {
    counter = 0;
    pluser($element);
}
