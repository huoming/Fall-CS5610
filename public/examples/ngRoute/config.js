(function(){
    angular
        .module("RouteExample")
        .config(function($routeProvider){
            //console.log("in config");
            $routeProvider
                .when("/profile", {
                    templateUrl:"/examples/ngRoute/profile.html",
                    controller: "ProfileController"
                })
                .when("/websitelist", {
                    templateUrl:"/examples/ngRoute/websitelist.html",
                    controller: "WebsiteListController"
                })
                .when("/pagelist", {
                    templateUrl:"/examples/ngRoute/pagelist.html"
                })
                .otherwise("/");
        });
})();