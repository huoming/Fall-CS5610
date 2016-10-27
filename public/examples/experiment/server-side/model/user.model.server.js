var users = require("./user.mock.json");
var guid = require("guid");

module.exports=function(){

    var api = {
        createUser: createUser,
        findAllUsers: findAllUsers,
        findUserById: findUserById,
        updateUserById: updateUserById,
        deleteUserById: deleteUserById,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials
    };
    return api;

    //CRUD
    //user sample: "_id": "123", "username": "alice",    "password": "alice",    "firstName": "Alice",  "lastName": "Wonder"
    function createUser(user)
    {
        var newUser = {
            _id: Guid.create(),
            username : user.username,
            password : user.password,
            firstName : user.firstName,
            lastName : user.lastName
        };
        users.push(newUser);
        return newUser;
    }

    function findAllUsers()
    {
        return users;
    }

    function findUserById(id)
    {
        var user = null;
        for (var i = 0; i < users.length; i++) {
            if (users[i]._id == id) {
                user = users[i];
                break;
            }
        }
        return user;
    }

    function updateUserById(id, user)
    {
        var user = null;
        for (var i = 0; i < users.length; i++) {
            if (users[i]._id == id) {
                console.log("found this id");
                users[i] = {
                    _id: id,
                    username: user.username,
                    password: user.password,
                    firstName : user.firstName,
                    lastName : user.lastName,
                };
                user = users[i];
                break;
            }
        }
        return user;
    }

    function deleteUserById(id)
    {
        for (var i = 0; i < users.length; i++) {
            if (users[i]._id == id) {
                users.splice(i, 1);
            }
        }
        return users;
    }

    function findUserByUsername(username)
    {
        var user = null;
        for (var i = 0; i < users.length; i++) {
            if (users[i].username == username) {
                user = users[i];
                break;
            }
        }
        return user;
    }

    function findUserByCredentials(credentials)
    {
        var user = null;
        for (var i = 0; i < users.length; i++) {
            if (users[i].username == credentials.username && users[i].password == credentials.password) {
                user = users[i];
            }
        }
        return user;
    }
}