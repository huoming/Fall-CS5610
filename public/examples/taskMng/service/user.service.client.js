(function(){
    "use strict";
    angular
        .module("TaskMngApp")
        .factory("UserService",UserService);

    function UserService(){
       var users = [
           {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
           {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
           {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
           {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
       ];

        var service = {
           createUser : createUser,
           findAllUsers: findAllUsers,
           findUserById : findUserById,
           findUserByCredentials : findUserByCredentials,
           updateUser : updateUser,
           deleteUser: deleteUser
       };
        return service;

        function createUser(user){
            var last_user_id = users[user.length-1]._id;
            last_user_id.toString.

            user["_id"] = last_user_id + 1 ;

            users.push(user);
        }
        function findAllUsers(callback){ (users);}
        function findUserById(userId){
            for(var i=0; i<users.length; i++){
                if(users[i]._id == userId){
                    return users[i];//callback
                }
            }
            return null;
        }
        function findUserByCredentials(username, password, callback){
            for(var i=0; i<users.length; i++){
                if(users[i].username == username && users[i].password==password){
                    callback(users[i]);
                    break; //return users[i];
                }
            }

        }
        function updateUser(userId, user){

        }
        function deleteUser(userId){}
    }
})();
