(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)
        .controller("NewWebsiteController", NewWebsiteController)
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteListController($routeParams, WebsiteService){
        var vm = this;
        vm.userId = $routeParams.uid; //$routeParams["uid"]
        var webId =  $routeParams.wid;

            function init(){
            vm.websites =WebsiteService.findWebsitesByUser(vm.userId);
        }
        init();

        function GetWebsiteById()
        {
            WebsiteService
                .findWebstieById(webId)
                .then(function(response){
                    var website = response.data;
                });
        }
    }

    function NewWebsiteController($routeParams, WebsiteService){}

    function WebsiteEditController($routeParams, WebsiteService){
        var vm = this;
        vm.wid = $routeParams.wid; //$routeParams["uid"]

        function init(){
            //vm.website =WebsiteService.findWebsitesById(vm.wid);

            WebsiteService
                .findWebstieById(vm.wid)
                .then(function(response){
                    vm.website = response.data;
                });
        }
        init();
    }

})();