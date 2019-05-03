/**
 * Created by amir on 5/9/18.
 */

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    

    fs.readFile( __dirname + '/from.txt', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        fs.writeFile(  __dirname + '/to.txt', data, function (err) {
            if (err) throw err;
        });
    });
}).listen(8080);
