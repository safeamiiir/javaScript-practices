/**
 * Created by amir on 4/5/18.
 */
function circleMove(event) {
    let cx = event.clientX + 20;
    let cy = event.clientY + 20;
    let x =  event.clientX;
    let y =  event.clientY;
    let coor = "Mouse X : " + x  + "  ,   Y : " + y + "<br>" ;
    let coor2 = "Circle X : " + cx + "  ,   Y : " + cy;
    document.getElementById("demo").innerHTML = coor;
    document.getElementById("demo").innerHTML += coor2;

    document.getElementById("circle").style.top = cy.toString()+"px";
    document.getElementById("circle").style.left = cx.toString()+"px";
}