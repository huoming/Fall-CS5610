(function() {
    angular
        .module("HelloWorldDirective", [])
        .controller("CustomersController", CustomersController)
        .directive("addressInfo", addressInfo);

    function CustomersController($scope){
        $scope.customer = {
            name: 'David',
            street: '888 Anywhere St.'
        };
    }

    function addressInfo(){
        return {
            template: 'Name: {{customer.name}} <br /> Street: {{customer.street}} -- from directive'
       };
    }
})();
