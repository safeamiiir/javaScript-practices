// load the things we need


var mongoose = require('mongoose');
var express = require('express');

 

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost/articles');
var schema = mongoose.Schema({
    title: String,
    content: String,
    date: Date
});


var connection = mongoose.connection;


// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
    var articles = [];
    var item = mongoose.model("articles", schema);
    item.find(
        function(err, response){
            // console.log(response);
            for ( each in response){
                articles.push(response[each]);
                // console.log(response[each]);
            }
            // console.log(articles);
            res.render('pages/index', {
                arts: articles
            });
        }).sort({date:-1}).limit(5);
});


app.get('/articles/:artID', function (req,res) {
    var articles = [];
    var item = mongoose.model("articles", schema);
    item.find(
        function(err, response){
            // console.log(response);
            for ( each in response){
                articles.push(response[each]);
                // console.log(response[each]);
            }
            // console.log(articles);
            var artID = req.params.artID;
            res.render('pages/articles', {
                arts: articles,
                artID: artID
            });
        });
});

app.get('/add',function (req,res) {
    res.render('pages/addArticle', {
    });
});

app.post('/articleAdded', function(req, res){
    console.log( req.body );
    req.body.date = new Date();
    console.log(req.body.date);
    connection.collection('articles').insert(req.body);
});
app.listen(8080);

