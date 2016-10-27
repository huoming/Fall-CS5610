//using express with node js
var express = require('express');
//var mongoose = require('mongoose');

//initialize app as an express application
var app = express();

//using body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname+'/public'));

var ipaddress = '127.0.0.1';
var port      = 3000;

app.listen(port, ipaddress);

console.log("hello world1");
// pass app to experiment server side app.js file
require("./public/examples/experiment/server-side/app.js")(app);



