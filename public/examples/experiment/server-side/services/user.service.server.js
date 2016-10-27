module.exports = function(app, UserModel){
    app.post("/api/example/experiment/login", login);
    app.post('/api/example/experiment/user', createUser);
    app.get('/api/example/experiment/user/:uid', findUserById);
    app.put('/api/example/experiment/user/:uid', updateUserProfile);
    app.get('/api/example/experiment/user', userLogin);

    function userLogin(req, res){
        var username = req.query.username;
        console.log("username: " + username);
        res.sendStatus(200);
    }

    function login(req, res){
        var user_credentials = req.body;
        var user = UserModel.findUserByCredentials(user_credentials);
        res.send(user);
    }

    function createUser(req, res){
        //create user failed
        var user = req.body;
        res.send(users[0]);
    }
    function findUserById(req, res){
        //create user failed
        var useId = req.params.uid;
        var user = UserModel.findUserById(useId);
        res.send(user);
    }

    function updateUserProfile(req, res){
        //create user failed
        res.sendStatus(200);
    }
}

