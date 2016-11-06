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
        //var user = UserModel.findUserByCredentials(user_credentials);
        UserModel
            .findUserByCredentials(user_credentials)
            .then(function(retVal){
                res.json(retVal);
            });

        //res.send(user);
    }

    function createUser(req, res){
        //create user failed
        var user = req.body;
        UserModel
        .findUserByUsername(user.username)
        .then(function(retVal){
            if(retVal!= null){ //user already reg
                 res.sendStatus(400).send("User already created!"); 
            }else{
                UserModel
                .createUser(user)
                .then(function(retVal){
                    if(retVal != null ){
                        res.sendStatus(200);
                    }
                },
                function(err){
                    res.sendStatus(400).send(err); //res.sendStatus(400).send(err);
                });
            }

        });


        
        //res.send(users[0]);
    }

    function findUserById(req, res){
        //create user failed
        var useId = req.params.uid;
        //var user = UserModel.findUserById(useId);
        UserModel
            .findUserById(useId)
            .then(
                function(response){
                    res.json(response);
                },
                function(err){
                    res.send(err);
                }
            );

        //res.send(user);
    }

    function updateUserProfile(req, res){
        //create user failed
        res.sendStatus(200);
    }
}

