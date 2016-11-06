(function(){
    angular
        .module("RouteExampleTwo")
        .controller("ProfileController",ProfileController);

    function ProfileController($scope){
        $scope.websites=[{title:'w1', description:'d1'},{title:'w2', description:'d2'},{title:'w3', description:'d3'}];
    }

})();