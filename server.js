//using express with node js
var express = require('express');

//initialize app as an express application
var app = express();

//using body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
 //using get by default location
 app.get('/', function(req, res){
 //console.log(req);
 res.send('hello world again from REST API!');
 });
 */

app.use(express.static(__dirname+'/public'));

var ipaddress = '127.0.0.1';
var port      = 3000;

app.listen(port, ipaddress);

// pass app to experiment server side app.js file
require("./public/examples/experiment/server/app.js")(app);