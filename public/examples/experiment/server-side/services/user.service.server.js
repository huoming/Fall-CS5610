module.exports = function(app, UserModel){

    app.post('/api/example/experiment/user', createUser);
    app.get('/api/example/experiment/user/:uid', findUserById);
    app.put('/api/example/experiment/user/:uid', updateUserProfile);

    function createUser(req, res){
        //create user failed
        var user = req.body;
        //console.log("creating a user as: " + user.username + " password: " + user.password);
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

