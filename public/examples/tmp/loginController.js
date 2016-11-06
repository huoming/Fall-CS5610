(function(){
    angular
        .module("RouteExampleTwo")
        .controller("LoginController", LoginController);

    function LoginController($scope){
        console.log("LoginController")
    }
})();