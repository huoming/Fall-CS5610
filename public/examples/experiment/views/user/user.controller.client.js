(function(){
    "use strict";
    angular
        .module("WebAppMaker")
        .controller("LoginController",LoginController)
        .controller("RegisterController",RegisterController);

    function RegisterController($routeParams, UserService){
        var vm = this;
        vm.createUser = createUser; //$scope.createUser = function(){ UserService.createUser();}

        function createUser(){
            UserService.createUser()
        }
    }
    function LoginController($location, UserService){
        var vm = this; // login controller instance
        vm.UserLogin = login;

        /* function init(){}
         init();*/

        function login(){
            UserService
                .login({
                    username: vm.user.username,
                    password: vm.user.password
                })
                .then(function(response){
                    if(response.data) {
                        UserService.setCurrentUser(response.data);
                        var user = response.data;
                        $location.url("/user/"+user._id);
                    }
                });
        }
        /*function login(){
            UserService.findUserByCredentials(vm.user.username, vm.user.password, function(user){
                if(user != null){
                    $location.url("/user/"+user._id);
                }
            });
        }*/
    }

    function RegisterController($location, UserService){
        var vm = this; // register controller instance
        vm.createUser = createUser;

        /* function init(){}
         init();*/

        function createUser(){
           UserService
                .createUser({
                    username: vm.user.username,
                    password: vm.user.password
                })
                .then(function(response){
                    if(response.data) {
                        //UserService.setCurrentUser(user);
                        var user = response.data;
                        $location.url("/user/"+user._id);
                    }
                });
        }
    }
})();







