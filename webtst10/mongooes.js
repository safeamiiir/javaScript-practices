/**
 * Created by amir on 5/17/18.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/articles');
var schema = mongoose.Schema({
    title: String,
    content: String

});
var item = mongoose.model("articles", schema);
item.find(
    function(err, response){
        console.log(response);
    });