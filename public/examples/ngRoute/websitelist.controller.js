(function(){
    angular
        .module("RouteExample")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($scope){
        $scope.websiteList = [{title:'W1'}, {title:'W2'},{title:'W3'},{title:'W4'}];
    }
})();