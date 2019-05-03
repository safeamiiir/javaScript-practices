/**
 * Created by amir on 4/5/18.
 */
function showCoords1(event) {
    let x = event.clientX ;
    let y = event.clientY ;
    let coor = "Mouse : X : " + x + " , Y : " + y;
    document.getElementById("demo1").innerHTML = coor;
}

function showCoords(event) {
    let x = event.clientX - 250;
    let y = event.clientY - 250;
    let coor = "Mouse :  X : " + x + ", Y : " + y;
    document.getElementById("demo").innerHTML = coor;
}

function clearCoor1() {
    document.getElementById("demo1").innerHTML = "";
}
function clearCoor() {
    document.getElementById("demo").innerHTML = "";
}