(function(){
    "use strict";
    angular
        .module("WebAppMaker")
        .factory("UserService",UserService);

    function UserService($http, $rootScope, $q){
       var users =[
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
           deleteUser: deleteUser,

            logout: logout,
            login: login,
            setCurrentUser: setCurrentUser,
            register: register,
            getProfile: getProfile
       };
        return service;

        function createUser(user){
            var last_user_id = users[user.length-1]._id;
            last_user_id.toString.

            user["_id"] = last_user_id + 1 ;

            users.push(user);

            /*
             var deferred = $q.defer();
             $http
             .post('/api/example/experiment/user', user)
             .success(function(response) {
             deferred.resolve(response);
             });
             return deferred.promise;
            * */
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

        //using REST api
        function login(credentials){
            return $http.post("/api/example/experiment/login", credentials);
        }
        /* remember the login user in client , cache */
        function setCurrentUser(user) {
            $rootScope.currentUser = user;
        }

        function logout(){}
        function register(){}
        function getProfile(){}
    }
})();
