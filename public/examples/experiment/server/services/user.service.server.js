module.exports = function(app, userModel) {

    app.post("/api/example/experiment/login", login);
    app.post('/api/example/experiment/user', createUser);

    var users =[
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ];

    function login(req,res){
        var credentials = req.body;//retrieve json
        console.log([credentials]);
        res.json(users[0]);
    }

    function createUser(req, res){
        var username = req.query.username;
        var password = req.query.password;
        if (username != null && password != null) {
            var credentials = {username: username, password: password};
            var user = userModel.findUserByCredentials(credentials);
            res.jsonp(user);
        } else if (username != null) {
            var user = userModel.findUserByUsername(username);
            res.jsonp(user);
        } else {
            res.jsonp(model.findAllUsers());
        }
    }
}