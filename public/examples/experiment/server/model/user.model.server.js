var users = require("./user.mock.json");

module.exports = function(app){
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
}

function createUser(user)
{
    var newUser = {
        username : user.username,
        password : user.password,
        email : user.email
    };
    users.push(newUser);
    return newUser;
}

function findAllUsers(){}
function findUserById(){}
function updateUserById(){}
function deleteUserById(){}
function findUserByUsername(){}
function findUserByCredentials(){}
