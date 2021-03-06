/**
 * Created by amir on 5/7/18.
 */
/**
 * Created by amir on 4/12/18.
 */
// let myObj = { "name":"John", "age":31, "city":"New York" };
// document.getElementById("demo").innerHTML = myObj;

let xmlhttp = new XMLHttpRequest();
let xmlhttp2 = new XMLHttpRequest();
let dataUrl = "https://api.myjson.com/bins/kaig7";
let personUrl = "https://api.myjson.com/bins/9kpk7";
let flag = 0;
let newInsertedData =[];

let header =  "<thead class=\"thead-light\">" + "<tr>" + "<th onclick=\"sortTable($(\'#myTable\'),\'asc\',0);\"> <a href=\"#\" >" + "UID" + "</th>" + "<th onclick=\"sortTable($(\'#myTable\'),\'asc\',1);\" ><a href=\"#\"  >" + "firstName" + "</th>" +  "<th onclick=\"sortTable($(\'#myTable\'),\'asc\',2);\"><a href=\"#\" >" + "lastName" + "</th>" +  "<th onclick=\"sortTable($(\'#myTable\'),\'asc\',3);\" ><a href=\"#\"  >" + "City" + "</th>" + "<th onclick=\"sortTable($(\'#myTable\'),\'asc\',4);\" ><a href=\"#\"  >" + "postalCode" + "</th>" +  "<th onclick=\"sortTable($(\'#myTable\'),\'asc\',5);\" ><a href=\"#\"  >" + "PhoneNumber" + "</th>" + "<th onclick=\"sortTable($(\'#myTable\'),\'asc\',6);\" ><a href=\"#\"  >" + "position" + "</th>" + "</tr>" + "</thead>";
let tableCells = "";
xmlhttp.onreadystatechange = function () {
    let data = jsonCorrector( JSON.parse(this.responseText) );
    if ( this.readyState === 4 && this.status === 200){
        xmlhttp2.onreadystatechange = function () {
            let person = jsonCorrector( JSON.parse(this.responseText) );
            for ( let i = 0; i < 10; i++){
                if(flag < 10){
                    tableCells += "<td>" + person[i].uid + "</td>";
                    tableCells += "<td>" + person[i].firstName + "</td>";
                    tableCells += "<td>" + person[i].lastName + "</td>";
                    tableCells += "<td>" + data[i].city + "</td>";
                    tableCells += "<td>" + data[i].postalCode + "</td>";
                    tableCells += "<td>" + data[i].phoneNumber + "</td>";
                    tableCells += "<td>" + data[i].position + "</td>";
                    tableCells += "</tr>" ;
                    flag ++ ;
                }
            }
            document.getElementById("myTable").innerHTML = header + tableCells ;
        };
    }
    xmlhttp2.open("GET", personUrl,true);
    xmlhttp2.send();
};

function jsonCorrector(jsonInput) {
    let out = [];
    for( let each in jsonInput ){
        out.push(jsonInput[each]);
    }
    return out;
}

xmlhttp.open("GET", dataUrl,true);
xmlhttp.send();



function sortTable(table, order, col) {
    let asc   = order === 'asc',
        tbody = table.find('tbody');
    tbody.find('tr').sort(function(a, b) {
        if (asc) {
            return $(`td:eq(${col})`, a).text().localeCompare($(`td:eq(${col})`, b).text());
        } else {
            return $(`td:eq(${col})`, b).text().localeCompare($(`td:eq(${col})`, a).text());
        }
    }).appendTo(tbody);
}

function hider() {
    $('#uidCI').hide();
    $('#firstNameCI').hide();
    $('#lastNameCI').hide();
    $('#cityCI').hide();
    $('#postalCodeCI').hide();
    $('#phoneNumberCI').hide();
    $('#positionCI').hide();
}

function showerInp() {
    $('#uidCI').show();
    $('#firstNameCI').show();
    $('#lastNameCI').show();
    $('#cityCI').show();
    $('#postalCodeCI').show();
    $('#phoneNumberCI').show();
    $('#positionCI').show();
}

function hiderInp() {
    $('#uidCI').hide();
    $('#firstNameCI').hide();
    $('#lastNameCI').hide();
    $('#cityCI').hide();
    $('#postalCodeCI').hide();
    $('#phoneNumberCI').hide();
    $('#positionCI').hide();
}

function rowDetector() {
    hider();
    if (!document.getElementsByTagName || !document.createTextNode) return;
    let rows = $('#myTable').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    let table = document.getElementById('myTable');
    for (i = 0; i < rows.length; i++) {
        rows[i].onclick = function() {
            console.log(this.rowIndex);
            console.log(table.rows[this.rowIndex].cells[1].textContent);
            $('#uidC').html(table.rows[this.rowIndex].cells[0].textContent);
            $('#firstNameC').html(table.rows[this.rowIndex].cells[1].textContent);
            $('#lastNameC').html(table.rows[this.rowIndex].cells[2].textContent);
            $('#cityC').html(table.rows[this.rowIndex].cells[3].textContent);
            $('#postalCodeC').html(table.rows[this.rowIndex].cells[4].textContent);
            $('#phoneNumberC').html(table.rows[this.rowIndex].cells[5].textContent);
            $('#positionC').html(table.rows[this.rowIndex].cells[6].textContent);
        }
    }
    $('#delete').show();
    $('#edit').show();
}

function visible() {
    $('#insertion').css({
        'visibility': 'visible'
    });
}

function editMainTableContent() {
    // console.log('editMainTableContent()');
    showerInp();

    $('#uidCI').attr("placeholder",  $('#uidC').html() );
    $('#firstNameCI').attr("placeholder",  $('#firstNameC').html() );
    $('#lastNameCI').attr("placeholder",  $('#lastNameC').html() );
    $('#cityCI').attr("placeholder",  $('#cityC').html() );
    $('#postalCodeCI').attr("placeholder",  $('#postalCodeC').html() );
    $('#phoneNumberCI').attr("placeholder",  $('#phoneNumberC').html() );
    $('#positionCI').attr("placeholder",  $('#positionC').html() );

    $('#done').show();

}

function doneMainTableContent() {
    console.log('DoneMainTableContent()');
    // $('#uidCI').val();
    // $('#firstNameCI').val();
    // $('#lastNameCI').val();
    // $('#cityCI').val();
    // $('#postalCodeCI').val();
    // $('#phoneNumberCI').val();
    // $('#positionCI').val();
    hiderInp();
}

function deleteMainTableContent() {
    // console.log('deleteMainTableContent()');

}


function cancel() {
    $('#insertion').css({
        'visibility': 'hidden'
    });
}
function submitNewData() {
    console.log("sunbmited");
    newInsertedData[0] = $('#uidI').val();
    newInsertedData[1] = $('#firstNameI').val();
    newInsertedData[2] = $('#lastNameI').val();
    newInsertedData[3] = $('#cityI').val();
    newInsertedData[4] = $('#positionI').val();
    newInsertedData[5] = $('#phoneNumberI').val();
    newInsertedData[6] = $('#positionI').val();
    // console.log(newInsertedData);
    cancel();
    trAdderToMainTable();

}

function trAdderToMainTable() {
    tableCells += "<td>" + newInsertedData[0] + "</td>";
    tableCells += "<td>" + newInsertedData[1] + "</td>";
    tableCells += "<td>" + newInsertedData[2] + "</td>";
    tableCells += "<td>" + newInsertedData[3] + "</td>";
    tableCells += "<td>" + newInsertedData[4] + "</td>";
    tableCells += "<td>" + newInsertedData[5] + "</td>";
    tableCells += "<td>" + newInsertedData[6] + "</td>";
    tableCells += "</tr>" ;
    document.getElementById("myTable").innerHTML = header + tableCells ;
}