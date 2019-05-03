/**
 * Created by amir on 5/10/18.
 */
var fs = require('fs');

fs.rename( __dirname + '/from.txt' , __dirname + '/newFrom.txt', function(err) {
    if ( err ) console.log('ERROR: ' + err);
});

fs.rename( __dirname + '/to.txt' , __dirname + '/newTo.txt', function(err) {
    if ( err ) console.log('ERROR: ' + err);
});