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

var  todos = [];

app.get('/todo', function(req, res){
    res.send(todos);
});

app.get('/todo/:title/:description', handleTodo);

function handleTodo(req, res)
{
    var title = req.params['title'];
    var description = req.params['description'];

   /* console.log(req.params['title']);
    console.log(req.params['description']);*/

    var todo_item = { title:title, description:description};
    todos.push(todo_item);

    res.send(todos);
}

app.delete('/todo/:id', function(req, res){
    var item_index = req.params['id'];
    todos.splice(item_index, 1);

    res.send(todos);
});

app.put('/todo/:id', function(req, res){
    var item_index = req.params['id'];

    var new_item = req.body;

    todos[item_index].title = new_item.title;
    todos[item_index].description = new_item.description;

    res.json(todos);
    //res.send(todos);
});

app.use(express.static(__dirname+'/todo_example'));

var ipaddress = '127.0.0.1';
var port      = 3000;

app.listen(port, ipaddress);

//console.log(process.env);
//console.log(process.env.APPDATA);
//console.log(process.env.ANDROID_HOME);