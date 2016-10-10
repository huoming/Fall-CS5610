(function(){
    angular
        .module("TaskMngApp")
        config(function($routeProvider){
            //console.log("in config");
            $routeProvider
                /*.when("/profile", {
                    templateUrl:"/examples/taskMng/profile.view.html",
                    controller: "ProfileController"
                })*/
                .when("/login", {
                    templateUrl:"/examples/taskMng/login.view.html",
                    controller: "LoginController",
                    controllerAs:"login"
                })
                .when("/register", {
                    templateUrl:"/examples/taskMng/register.view.html",
                    controller: "RegisterController",
                    controllerAs:"register"
                })
                .when("/user/:uid", {
                    templateUrl:"/examples/taskMng/profile.view.html",
                    controller: "ProfileController",
                    controllerAs:"model"
                })
                .when("/user/:uid/website", {
                    templateUrl:"/examples/taskMng/website.view.client.html",
                    controller: "websiteListController",
                    controllerAs:"model"
                })
                .when("/user/:uid/website/new", {
                    templateUrl:"/examples/taskMng/website-new.view.client.html",
                    controller: "websiteNewController",
                    controllerAs:"model"
                })
                .when("/user/:uid/website/:wid", {
                    templateUrl:"/examples/taskMng/website-edit.view.client.html",
                    controller: "websiteEditController",
                    controllerAs:"model"
                })
                .otherwise("/");
        });
})();