var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var port = 3000;

//__dirname is the dir wher ethe current script is executing
var app = express();
app.use(bodyParser.json()); // don't need this
app.use(bodyParser.urlencoded({extended: false}));  //don't need this
app.use(express.static(path.join(__dirname, 'app')));


app.get('/', function(req, res,next){
    res.status(200).sendFile(path.join(__dirname+"/app/index.html"))
});


app.listen(port, function(){
    console.log("Now listening on port " + port);
})