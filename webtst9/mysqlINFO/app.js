/**
 * Created by amir on 5/20/18.
 */
const express = require('express');
const mysql = require('mysql');

const app = express();
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root"
// });
// let queryLine = "INSERT INTO INFORMATION ( uid, firstname, lastname, city, postalcode, phonenumber, position) VALUES ('" + output.title + "', '" + output.date + "', '" + output.month + "', '" + output.venue + "', '" + output.link + "');";
// let query = connection.query(queryLine, scrape, function(err, result) {
//     if(err) throw err;
//     console.log('data inserted');
// });

app.use(express.static('public'));


app.get("/",function (req, res) {
    res.sendFile( __dirname + "/view/jsontst.html");
});
app.listen(8080);