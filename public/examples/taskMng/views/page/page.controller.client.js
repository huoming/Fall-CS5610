(function() {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController)
        .controller("NewWebsiteController", NewWebsiteController)
        .controller("EditWebsiteController", EditWebsiteController);

    function WebsiteListController($routeParams, WebsiteService){
        var vm = this;
        var userId = $routeParams.uid; //$routeParams["uid"]

        function init(){
            vm.websites =WebsiteService.findWebsitesByUser(userId);
        }
        init();

    }
    function NewWebsiteController(){}
    function EditWebsiteController(){}

})();