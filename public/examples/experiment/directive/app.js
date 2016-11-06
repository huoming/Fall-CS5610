(function(){
    angular
        .module("SortListApp", ["ngRoute", "jgaDirectives"])
        .controller("SampleController", SampleController);

    var items = [
        {first: "Alice", last: "Wonderland", email: "alice@email.com"},
        {first: "Bob", last: "Hope", email: "bob@oscars.com"},
        {first: "Charlie", last: "Brown", email: "charlie@schultz.com"},
        {first: "John", last: "Smith", email: "smith@schultz.com"}
    ];

    function SampleController($scope){

        var vm = this;
        vm.items = items;

        vm.sortItem = sortItem;

        function sortItem(start, end) {
            //sortWidgets
            //WidgetService.sortWidget(start, end);
           /* $http.put("api/page/:pageId/widget?initial="+start+"&final="+end);

            var start = req.query.initial;
            var end =  req.query.final*/

            app.put("api/page/:pageId/widget");

            console.log("start: " + start);
            console.log("end: " + end);

            vm.items.splice(end, 0, vm.items.splice(start, 1)[0] );

            for(var i in vm.items){
                console.log(vm.items[i].first);
            }
        }
    }

})();