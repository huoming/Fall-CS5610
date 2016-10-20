/* 1. load the express library */
var express       = require('express');

/*1.1 load extra library*/
var bodyParser  = require('body-parser');
//var multer      = require('multer');
var cookieParser  = require('cookie-parser');
//var session       = require('express-session');
// install and require the mongoose library
//var mongoose      = require('mongoose');

/* 2. create instance */
var app          = express();

// create a default connection string
var connectionString = 'mongodb://127.0.0.1:27017/cs5610spring2016';

// use remote connection string if running in remote server
// process provided by nodejs
if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}

// connect to the database
//var db = mongoose.connect(connectionString);

/* 6. JSON : include body-parser, multer library */
app.use(bodyParser.json());// for parsing application/json
app.use(bodyParser.urlencoded({ extended:true }));// for parsing application/x-
//app.use(multer());
//app.use(session({ secret: process.env.PASSPORT_SECRET }));//private key to identify the person
app.use(cookieParser());


/* 4. serve static content for the app from the "public" directory in the application directory */
app.use(express.static(__dirname + '/public'));

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 5000;

/* 5. mapping the coming http request with url pattern '/hello' to the executable function,
 * pass the url, res.send() generate the correct type to go back to client
 * 3 party API */
app.get('/hello', function(req, res){ res.send('hello world'); });

/* 3. listen to particular port */
app.listen(port, ipaddress);

/* physical location : load server.js in other folder, passing app
 * var app = express()
 * this file requires the module and function, when I have the function, I invoke it and pass app */

//omdb example
/*var users = [
    {
        "_id": "123qwe",
        "username": "alice",
        "password": "alice",
        "firstName": "Alice",
        "lastName": "Wonderland",
        "email": "alice@alice.com"
    },
    {
        "_id": "234wer",
        "username": "bob",
        "password": "bob",
        "firstName": "Bob",
        "lastName": "Marley",
        "email": "bob@marley.com"
    },
    {
        "_id": "345ert",
        "username": "charlie",
        "password": "charlie",
        "firstName": "Charlie",
        "lastName": "Brown",
        "email": "charlie@brown.com"
    }
];
/!* 1. create server end points, listening for the url and response *!/
app.post("/api/example/omdb/login", login);
/!* use model method to fetch things *!/
function login(req, res) {
    var credentials = req.body;//retrieve json
    var username = credentials.username;
    var password = credentials.password;

    var user = null;
    for(var i = 0; i < users.length; i++) {
        if(credentials.username == users[i].username
            && credentials.password == users[i].password) {
            user= users[i];
            break;
        }
    }
    res.jsonp(user);
}

app.post("/api/example/omdb/loggedin", loggedin);
/!* use model method to fetch things *!/
function loggedin(req, res) {
    var credentials = req.body;//retrieve json
    var username = credentials.username;
    var password = credentials.password;

    var user = null;
    for(var i = 0; i < users.length; i++) {
        if(credentials.username == users[i].username
            && credentials.password == users[i].password) {
            user= users[i];
            break;
        }
    }
    res.jsonp(user);
}
app.get("/api/example/omdb/profile/:userId", profile);
function profile(req, res){
    var userId = req.params.userId;//current userId
    var user = null;

    for(var i = 0; i < users.length; i++) {
        if(userId == users[i]._id) {
            user= users[i];
            break;
        }
    }
    res.jsonp(user);
}*/

// pass db and mongoose reference to server side application module
require("./public/lectures/OMDB/server/app.js")(app);


