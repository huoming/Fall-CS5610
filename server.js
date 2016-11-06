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


//connecting to mongodb
var mongoose = require('mongoose');
var connectionString = 'mongodb://127.0.0.1:27017/cs5610spring2016';
var db = mongoose.connect(connectionString);
var db_connection = mongoose.connection;

//test if the connected successfully
db_connection.on('connected', function(){
	console.log("connect to db successfully!");
});

db_connection.on('error', function(){
	console.log("connection error!");
});

db_connection.on('disconnected', function(){
	console.log("db disconnected!");
});


console.log("hello world1");
// pass app to experiment server side app.js file
//require("./public/examples/experiment/server-side/app.js")(app);
require("./public/examples/experiment/server-side/app.js")(app, mongoose, db);



