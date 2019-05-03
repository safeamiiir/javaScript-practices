/**
 * Created by amir on 3/15/18.
 */
function ifer() {
    if(browser === 'Edge')
        alert("You've got the edge!");
    else if(browser === 'Chrome' || 'Firefox' || 'Safari' || 'Opera')
        alert('Okay we support these browsers too');
    else
        alert('We hope that these page looks okay!');
}

var browser = 'Chrome';
ifer(browser);


