/**
 * Created by amir on 4/5/18.
 */
function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "Mouse :" +  "  X : " + x + "  ,   Y : " + y;
    document.getElementById("demo").innerHTML = coor;
}