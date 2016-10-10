(function(){
    "use strict";
    angular
        .module("TaskMngApp")
        .controller("LoginController",LoginController)
        .controller("RegisterController",RegisterController);

    function RegisterController($routeParams, UserService){
        var vm = this;
        vm.createUser = createUser;

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
            UserService.findUserByCredentials(vm.user.username, vm.user.password, function(user){
                if(user != null){
                    $location.url("/user/"+user._id);
                }
            });
        }
    }
})();







