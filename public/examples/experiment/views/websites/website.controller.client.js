(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)
        .controller("NewWebsiteController", NewWebsiteController)
        .controller("EditWebsiteController", EditWebsiteController);

    function WebsiteListController($routeParams, WebsiteService){
        var vm = this;
        vm.userId = $routeParams.uid; //$routeParams["uid"]

        function init(){
            vm.websites =WebsiteService.findWebsitesByUser(vm.userId);
        }
        init();

    }
    function NewWebsiteController($routeParams, WebsiteService){}

    function EditWebsiteController($routeParams, WebsiteService){
        var vm = this;
        vm.wid = $routeParams.wid; //$routeParams["uid"]

        function init(){
            vm.website =WebsiteService.findWebsitesById(vm.wid);
        }
        init();
    }

})();