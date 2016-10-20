(function(){
    angular
        .module("WebAppMaker")
        .config(function($routeProvider){
            //console.log("in config");
            $routeProvider
                .when("/profile", {
                    templateUrl:"/examples/experiment/views/user/profile.view.client.html",
                    controller: "ProfileController"
                })
                .when("/login", {
                    templateUrl:"/examples/experiment/views/user/login.view.client.html",
                    controller: "LoginController",
                    controllerAs:"login"
                })
                .when("/register", {
                    templateUrl:"/examples/experiment/views/user/register.view.client.html",
                    controller: "RegisterController",
                    controllerAs:"register"
                })
                .when("/user/:uid", { // will be same as /user/123
                    templateUrl:"/examples/experiment/views/user/profile.view.client.html",
                    controller: "ProfileController",
                    controllerAs:"model"
                })
                .when("/user/:uid/website", {
                    templateUrl:"/examples/experiment/views/websites/website-list.view.client.html",
                    controller: "WebsiteListController",
                    controllerAs:"model"
                })
                .when("/user/:uid/website/new", {
                    templateUrl:"/examples/experiment/views/websites/website-new.view.client.html",
                    controller: "WebsiteListController",
                    controllerAs:"model"
                })
                .when("/user/:uid/website/:wid", {
                    templateUrl:"/examples/experiment/views/websites/website-edit.view.client.html",
                    controller: "WebsiteEditController",
                    controllerAs:"model"
                })
                .when("/user/:uid/website/:wid/page", {
                    templateUrl:"/examples/experiment/views/websites/website-edit.view.client.html",
                    controller: "PageListController",
                    controllerAs:"model"
                })
                .when("/user/:uid/website/:wid/page/new", {
                    templateUrl:"/examples/experiment/views/websites/website-edit.view.client.html",
                    controller: "PageListController",
                    controllerAs:"model"
                })
                .when("/user/:uid/website/:wid/page/:pid", {
                    templateUrl:"/examples/experiment/views/websites/website-edit.view.client.html",
                    controller: "PageListController",
                    controllerAs:"model"
                })
                .when("/user/:uid/website/:wid/page/:pid/widget", {
                    templateUrl:"/examples/experiment/views/widget/widget-list.view.client.html",
                    controller: "WidgetListController",
                    controllerAs:"model"
                })
                .when("/user/:uid/website/:wid/page/:pid/widget/new", {
                    templateUrl:"/examples/experiment/views/websites/website-edit.view.client.html",
                    controller: "WidgetListController",
                    controllerAs:"model"
                })
                .when("/user/:uid/website/:wid/page/:pid/widget/:wgid", {
                    templateUrl:"/examples/experiment/views/websites/website-edit.view.client.html",
                    controller: "WebsiteListController",
                    controllerAs:"model"
                })
                .otherwise({redirectTo: "/login"});
        });
})();