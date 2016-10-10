(function(){
    "use strict";
    angular
        .module("TaskMngApp")
        .controller("ProfileController",ProfileController);

    function ProfileController($location, $routeParams,UserService){
        var vm = this;

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

        //vm.websites = lisWebSites;
        function lisWebSites(){
            $location.url("/user/"+ userId + "/website/");
            console.log("passing user it to url");
        }
    }
})();