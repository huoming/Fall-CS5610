(function(){
    angular
        .module('RouteExampleTwo')
        .config(function($routeProvider){
            $routeProvider
                .when("/profile", {
                    templateUrl:"/examples/tmp/profile.html",
                    controller: "ProfileController"
                })
                .when("/login", {
                    templateUrl:"/examples/tmp/login.html",
                    controller: "LoginController"
                })
                .when("/register", {
                    templateUrl:"/examples/tmp/register.html"
                })
                .otherwise("/");
        });
})();