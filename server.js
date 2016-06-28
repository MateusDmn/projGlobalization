var express = require('express');
var app = express();

app.use(express.static(__dirname + '/ui')); 

var portNumber = 3001;
var server = app.listen(portNumber,function(){
    console.log("We have started our server on port! "+portNumber);
});
var router = express.Router();

app.get('*', function(req, res) {
    res.sendfile('./ui/views/index.html'); 
});