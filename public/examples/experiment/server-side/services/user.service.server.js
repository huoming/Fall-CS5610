var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy   = require('passport-google-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var bcrypt = require("bcrypt-nodejs");


module.exports = function(app, UserModel){
    //app.post("/api/example/experiment/login", login);
    app.post('/api/example/experiment/login', passport.authenticate('LocalStrategy'), login);
    app.post  ('/api/example/experiment/logout',   logout);
    app.get   ('/api/example/experiment/loggedin', loggedin);
    
    app.post('/api/example/experiment/user', createUser);
    app.get('/api/example/experiment/user/:uid', findUserById);
    app.put('/api/example/experiment/user/:uid', updateUserProfile);
    app.get('/api/example/experiment/user', userLogin);


    passport.use(new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser); //store user data in the session
    passport.deserializeUser(deserializeUser); //fetch object and then attach it to the request object as req.user

    function localStrategy(username, password, done) {
        userModel
            .findUserByCredentials(username, password)
            .then(
                function(user) {
                    if(user.username == username && user.password == password) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                },
                function(err) {
                    if (err) { return done(err); }
                }
            );
    }

    /*function authorized (req, res, next) {
        if (!req.isAuthenticated()) {
            res.send(401);
        } else {
            next();
        }
    };*/

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
    passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback"
      },
      function(accessToken, refreshToken, profile, done) {
           userModel
            .findOrCreateUser(profile)
            .then(function(user){
                if(user){
                    return done(null, user);
                }else{ //create a new user in db
                    var email = profile.emails[0].value;
                    var newUser={
                        username: emails.split("@")[0],
                        firstName: profile.name.givenName,
                        lastName: profile.name.familyName,
                        google: {
                            id: profile.id,
                            token: accessToken
                        }
                    };
                    return userModel.createUser(newUser);
                }
            },
            function(err){

            });
      }
    ));


    function serializeUser(user, done) {
        delete user.password;
        done(null, user);
    }

    function deserializeUser(user, done) {
        userModel
            .findUserById(user._id)
            .then(
                function(user){
                    delete user.password;
                    done(null, user);
                },
                function(err){
                    done(err, null);
                }
            );
    }

    
    function userLogin(req, res){
            var username = req.query.username;
            console.log("username: " + username);
            res.sendStatus(200);
    }

    /*function login(req, res){
        var user_credentials = req.body;
        //var user = UserModel.findUserByCredentials(user_credentials);
        UserModel
            .findUserByCredentials(user_credentials)
            .then(function(retVal){
                res.json(retVal);
            });
        //res.send(user);


    }*/

    function login(req, res) {
        var user = req.user;
        if (user != null){
            delete user.password;
            res.json(user);   
        }
        else
        {
            res.sendStatus(404);
        }
    }

    function loggedin(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    function logout(req, res) {
        req.logOut();
        res.send(200);
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
                    res.sendStatus(400).send(err); 
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

