module.exports = function(app){

    var users = [
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
    app.post("/api/example/omdb/loggedin", loggedin);
    app.post("/api/example/omdb/profile/", profile);
    app.post("/api/example/omdb/register", register);

    function loggedin(req, res){}
    function profile(req, res){}
    function register(req, res){}

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
}