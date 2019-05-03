
function switcher() {
    switch (a){
        case 0:
            alert(0);
            break;
        case 1:
            alert(1);
            break;
        case 2:
        case 3:
            alert('2,3');
            break;
        default:
            //It Doesn't Have Default !
            break;
    }
}
var a =+ prompt('a?','');
switcher(a);