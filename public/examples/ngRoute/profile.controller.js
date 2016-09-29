(function(){
    angular
        .module("RouteExample")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope){
        $scope.profilePage = "My Profile";
    }
})();