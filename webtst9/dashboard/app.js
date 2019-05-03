/**
 * Created by amir on 5/16/18.
 */
const express = require('express');
const app = express();
app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/",function (req, res) {
    res.sendFile( __dirname + "/view/main.html");
});
app.get("/pages",function (req, res) {
    res.sendFile( __dirname + "/view/dashboard.html");
});
app.get("/pages/:pageName",function (req, res) {
    res.sendFile( __dirname + "/view/" + req.params.pageName );
});

// *It Connects To The Database* !
var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root"
    });

// *It Creates The Database* !
    // console.log("Connected!");
    // con.query("CREATE DATABASE mydbtssst", function (err, result) {
    //     if (err) throw err;
    //     console.log("Database created");
    // });

// *Create a table named "userInfo":*
//     console.log("Connected!");
//     var use = " USE mydbtssst";
//     con.query(use, function (err, result) {
//         if (err) throw err;
//         console.log("USing Done");
//     });
//     var sql = "CREATE TABLE userInfo (name VARCHAR(255), family VARCHAR(255), username VARCHAR(255) , password VARCHAR(255) )";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");
//     });

app.post('/userData', function(req, res){
    console.log( req.body );

    var use = " USE mydbtssst";
    con.query(use, function (err, result) {
        if (err) throw err;
        console.log("USing Done");
    });
    var sql = "INSERT INTO userInfo (name, family, username, password) VALUES " + "('" + req.body.name + "','" + req.body.family + "','" + req.body.username + "','" +  req.body.password + "')";
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});

app.post('/userCheckData', function(req, res){

    console.log( req.body );
    var use = " USE mydbtssst";
    con.query(use, function (err, result) {
        if (err) throw err;
        console.log("USing Done");
    });
    var sql = "select * from userInfo where username = '" + req.body.username +  "' and password = '" + req.body.password + "'";
    console.log(sql);
    con.query(sql, function (err, result) {
        console.log(result.length);
        if (err) throw err;
        if (result.length === 0){
            console.log(" NOT LOGNED IN  ");
            res.send({
                login:false
            });
        }
        if (result.length > 0){
            console.log(" LOGIN DONE ");
            res.send({
                login:true
            });
        }
    });
});

app.listen(8080);