/**
 * Created by amir on 5/10/18.
 */
// const http = require('http');
// const fs = require('fs');
// ')
//
// http.createServer(function (req, res) {
//     fs.readFile( process.cwd() + '/index.html', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//     });
// }).listen(8080);

const express = require('express');
const app = express();
app.use(express.static('public'));

app.get("/",function (req, res) {
    res.sendFile( __dirname + "/view/homeIndex.html");
});

// app.get("/dashboard",function (req, res) {
//     res.sendFile( __dirname + "/view/dashboardIndex.html");
// });

app.get("/articles/:artID",function (req, res) {
    console.log(req.params);
    res.sendFile( __dirname + "/view/articles/" + req.params.artID + ".html");
});

app.listen(8080);