(function(){
    angular
        .module("OmdbApp")
        .factory("UserService", userService);


    function userService($http,$q,$rootScope) {
        var api = {
            findUserByCredentials: findUserByCredentials,
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser,

            logout: logout,
            login: login,
            register: register,
            getProfile: getProfile
        };
        return api;

        function findUserByCredentials(credentials) {
            //send the credentials to server to check whether the person exists, https : security issue
            return $http.post("/api/example/omdb/login", credentials);
        }

        /* go to server to find current user, return the promise */
        function getCurrentUser() {
            //return $http.get("/api/example/omdb/loggedin");
            return $rootScope.currentUser;
        }

        /* remember the login user in client , cache */
        function setCurrentUser(user) {
            $rootScope.currentUser = user;
        }

        function register(user) {
            return $http.post("/api/example/omdb/register", user);
        }

        function logout() {
            return $http.post("/api/example/omdb/logout");
        }

        function getProfile() {//pass current login user
            return $http.get("/api/example/omdb/profile/"+$rootScope.currentUser._id);
        }

        function login(credentials) {
            //refactoring version
            //return $http.post("/api/example/omdb/login", credentials);

            // this is old version
           /* var user = null;
            $http.post("/api/example/omdb/login", credentials)
                .success(function(response){
                    //user = response;
                    return reponse;
                });
            return user;*/

            //this is promise version
            var deferred = $q.defer();
             $http.post("/api/example/omdb/login", credentials)
             .then(function(response){
                     deferred.resolve(response);
             });
            return deferred.promise;
        }
    }
})();