// jgaTable.js
(function(){

    // declares directive in
    // custom module
    angular
        .module("jgaTable", [])
        .directive("jgaTableExample", jgaTableExample);

    // implements directive
    // templateUrl refers to template file
    function jgaTableExample() {
        return {
            scope: {
                "caption": "=caption",
                "border": "="
            },
            templateUrl: "jgaTable.html"
        };
    }
})();
// in html use as : <jga-table >