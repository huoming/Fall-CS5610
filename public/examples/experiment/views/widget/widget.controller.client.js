(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController)
        .controller("NewWidgetController", NewWidgetController)
        .controller("EditWidgetController", EditWidgetController);

    function WidgetListController($routeParams, $sce, WidgetService){
        var vm = this;
        vm.checkHtml = checkHtml;
        vm.checkUrl = checkUrl;
        vm.pageId = $routeParams.pid; //$routeParams["uid"]

        function init(){
            //vm.widgets =WidgetService.findWebsitesByPageId(vm.pageId);
            vm.widgets =WidgetService.findAllWidgets(vm.pageId);
        }
        init();

        function checkHtml(html){
            return $sce.trustAsHtml(html);
        }

        function checkUrl(url){
            var parts = url.split('/');
            var id = parts[parts.length-1];
            url = "https://www.youtube.com/embed/"+id;
            return $sce.trustAsResourceUrl(url);
        }

    }
    function NewWidgetController(){}
    function EditWidgetController(){}

})();