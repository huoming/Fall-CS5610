(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)
        .controller("NewWebsiteController", NewWebsiteController)
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteListController($rootScope,$scope,$routeParams, WebsiteService){
        var vm = this;
        vm.userId = $routeParams.uid; //$routeParams["uid"]
        //var webId =  $routeParams.wid;

        vm.editWebsite = editWebsite;
        vm.loadCreateWebsitePage = loadCreateWebsitePage;
        vm.updateWebsites = updateWebsites;

        function init(){
                 //vm.websites = WebsiteService.findWebsitesByUser(vm.userId);
            WebsiteService
                .findAllWebstiesForUser(vm.userId)
                .then(function(response){
                         vm.websites = response.data;
                });
                 vm.status = "Edit Website";
                 vm.edit = true;
        }
        init();

        function editWebsite(wid){
            vm.edit = true;
            vm.status = "Edit Website";
            vm.selectedWid = wid;
            WebsiteService.loadWebsitesbyId(wid);
        }

        function loadCreateWebsitePage(){
            vm.edit = false;
            vm.status = "New Website";
        }

        function updateWebsites(){
            if(!vm.edit){
                //create website
                //WebsiteService.createWebstie(vm.website);
                $rootScope.$broadcast('handleCreateWebsite', vm.userId);
                WebsiteService
                    .findAllWebsties(vm.userId)
                    .then(function(response){
                        vm.websites = response.data;
                    });

            }else if(vm.edit){
                //update current website
                //WebsiteService.updateWebstie(vm.website);
                $rootScope.$broadcast('handleUpdateWebsite',  vm.selectedWid);
            }
        }
    }

    function NewWebsiteController($scope, $routeParams, WebsiteService){

        var vm = this;

        $scope.$on('handleCreateWebsite', function(event, args){
            console.log("create webiste for user: " + args);
            vm.website.developerId = args;
            WebsiteService.createWebstie(vm.website);
        });
    }

    function WebsiteEditController($scope, $routeParams, WebsiteService){
        var vm = this;
        //vm.wid = $routeParams.wid; //$routeParams["uid"]

        function init(){
           /* WebsiteService
                .findWebstieById(vm.wid)
                .then(function(response){
                    vm.website = response.data;
                });*/
        }
        init();

        $scope.$on('handleLoadWebsite', function(event, args){
            console.log("handle load website! " + args);
            vm.website = args;
            console.log("name: " + vm.website.name);
            console.log("description: " + vm.website.description);
            //$scope.$apply();
        });

        $scope.$on("handleUpdateWebsite", function(even, args){
            console.log("handle update website! " + args);
            vm.selectedWid = args;
            console.log("name: " + vm.website.name);
            console.log("description: " + vm.website.description);
            WebsiteService
                .updateWebsites(vm.selectedWid, vm.website)
                .then(function(response){
                    console.log(response);
                });
        });
    }
})();