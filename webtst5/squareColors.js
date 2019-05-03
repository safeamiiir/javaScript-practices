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

    document.getElementById("circle").style.backgroundColor = "blue";

}

function square1() {
    let cx = event.clientX + 20;
    let cy = event.clientY + 20;
    let x =  event.clientX;
    let y =  event.clientY;
    let blackX = event.clientX - 140;
    let blackY = event.clientY - 240;

    let coor = "Mouse X : " + x  + "  ,   Y : " + y + "<br>" ;
    let coor2 = "Circle X : " + cx + "  ,   Y : " + cy;
    document.getElementById("demo").innerHTML = coor;
    document.getElementById("demo").innerHTML += coor2;
    document.getElementById("demo").innerHTML += "<br>" + "Black Circle ( Red Circle): X : " + blackX + " , Y : " + blackY ;

    document.getElementById("circle").style.top = cy.toString()+"px";
    document.getElementById("circle").style.left = cx.toString()+"px";

    document.getElementById("circle").style.backgroundColor = "red";

}

function square2() {
    let cx = event.clientX + 20;
    let cy = event.clientY + 20;
    let x =  event.clientX;
    let y =  event.clientY;
    let redX = event.clientX - 490;
    let redY = event.clientY - 240;
    let coor = "Mouse X : " + x  + "  ,   Y : " + y + "<br>" ;
    let coor2 = "Circle X : " + cx + "  ,   Y : " + cy;
    document.getElementById("demo").innerHTML = coor;
    document.getElementById("demo").innerHTML += coor2;
    document.getElementById("demo").innerHTML += "<br>" +  "Black Circle ( Red Circle): X :" + redX + " , Y : " + redY;

    document.getElementById("circle").style.top = cy.toString()+"px";
    document.getElementById("circle").style.left = cx.toString()+"px";

    document.getElementById("circle").style.backgroundColor = "black";

}
