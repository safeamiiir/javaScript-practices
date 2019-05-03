/**
 * Created by amir on 4/5/18.
 */

let numKnown = 0;

function tableCreator() {
    let rndom = 0;
    let table = document.getElementById("myTable");
    for(let i = 0; i < 10; i++){
        let row  = table.insertRow(i);
        for(let j = 9; j >= 0; j--){
            rndom = Math.floor(Math.random() * 10) + 1;
            let cell = row.insertCell(0);
            cell.innerHTML =  rndom;
        }
    }
}
tableCreator();


function sameChecker() {
    let table = document.getElementById("myTable");
    for(let i = 0; i < 10; i ++){
        for(let j = 0; j < 10; j++){
            table.rows[i].cells[j].onmouseover = function Hoverer() {
                hightLighter(i,j);
                numKnown = table.rows[i].cells[j].innerHTML;
            };
            table.rows[i].cells[j].onmouseleave = function Hoverer() {
                table.rows[i].cells[j].style.backgroundColor = "deepskyblue" ;
            };
        }
    }
}


function hightLighter(i,j) {
    let table = document.getElementById("myTable");

    table.rows[i].cells[j].addEventListener("mouseenter" ,function() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                for (let k = 0; k < 10; k++) {
                    for (let l = 0; l < 10; l++) {
                        if (table.rows[i].cells[j].innerHTML === table.rows[k].cells[l].innerHTML
                            && table.rows[i].cells[j].innerHTML === numKnown) {
                            table.rows[i].cells[j].style.backgroundColor = "darkblue";
                        }
                    }
                }
            }
        }

    });

    table.rows[i].cells[j].addEventListener("mouseleave" ,function() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                for (let k = 0; k < 10; k++) {
                    for (let l = 0; l < 10; l++) {
                        if (table.rows[i].cells[j].innerHTML === table.rows[k].cells[l].innerHTML
                            && table.rows[i].cells[j].innerHTML === numKnown) {
                            table.rows[i].cells[j].style.backgroundColor = "deepskyblue";
                        }
                    }
                }
            }
        }

    });
}

sameChecker();