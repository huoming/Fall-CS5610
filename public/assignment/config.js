(function(){
    angular
        .module("TaskMngApp")
        config(function($routeProvider){
            //console.log("in config");
            $routeProvider
                .when("/login", {
                    templateUrl:"/assignment/views/login.view.html",
                    controller: "LoginController",
                    controllerAs:"login"
                })
                .when("/register", {
                    templateUrl:"/assignment/views/register.view.html",
                    controller: "RegisterController",
                    controllerAs:"register"
                })
                .when("/user/:uid", {
                    templateUrl:"/assignment/views/profile.view.html",
                    controller: "ProfileController",
                    controllerAs:"model"
                })
                .when("/user/:uid/website", {
                    templateUrl:"/assignment/views/website-list.view.client.html",
                    controller: "WebsiteListController",
                    controllerAs:"model"
                })
                .when("/user/:uid/website/new", {
                    templateUrl:"/assignment/views/website-new.view.client.html",
                    controller: "NewWebsiteController",
                    controllerAs:"model"
                })
                .when("/user/:uid/website/:wid", {
                    templateUrl:"/assignment/views/website-edit.view.client.html",
                    controller: "EditWebsiteController",
                    controllerAs:"model"
                })
                .otherwise("/");
        });
})();