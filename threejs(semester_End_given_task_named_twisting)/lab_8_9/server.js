var express = require("express");
var app = express();
app.use(express.static('public'));
//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));
console.log(__dirname + '/public/js')
var server = app.listen(1000, function(){
var port = server.address().port;
console.log("Server started at http://localhost:%s \nPress CTRL + C to shutdown", port);
});