(function(){
    "use strict";
    angular
        .module("WebAppMaker")
        .controller("ProfileController",ProfileController);

    function ProfileController($location, $routeParams,UserService){
        var vm = this;
        vm.listwebsites = listwebsites;
        var userId = $routeParams.uid; //$routeParams["uid"]

        function init(){
            var currentUser = UserService.findUserById(userId);
            if(currentUser!=null){
                vm.user = currentUser;
            }
            else{
                $location.url("/login");
            }
        }
        init();

        function listwebsites(){
            $location.url("/user/"+ userId + "/website/");
            console.log("passing user it to url");
        }
    }
})();