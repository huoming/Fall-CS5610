// jgaTable.js
(function(){
    angular
        .module("jgaTable", [])
        .directive("jgaTableExample", jgaTableExample);

    // implements directive
    // templateUrl refers to template file
    function jgaTableExample() {
        return {
            scope: {
                "caption": "=caption",
                "border": "=",
                "data": "="
            },
            templateUrl: "./jgaTable/jgaTable.html"
        };
    }
})();