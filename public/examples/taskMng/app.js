(function() {
    angular
        .module("TaskMngApp", ["ngRoute"]);
        /*.controller("TextController", TextController_fnc);

    function TextController_fnc($scope, $http){

       /!* $scope.todos = [];*!/

        $scope.CreateTodoClicked = function(){
            console.log("button clicked: " + $scope.todo_title);
            //var todo_item = { title: $scope.todo_title, description : $scope.todo_description };

            //$scope.todos.push(todo_item);

            $http.get('/todo/'+$scope.todo_title+'/'+$scope.todo_description)
                .success(function(response){
                    console.log("client side output: " + response);
                    $scope.todos = response;
                });
        }

        $scope.DeleteTodoClicked = function(index){
            //$scope.todos.splice(index,1);

            $http.delete('/todo/'+index)
                .success(function(response){
                    $scope.todos = response;
                });
        }

        $scope.SeleteTodoClicked = function(index){
            $scope.todo_title = $scope.todos[index].title;
            $scope.todo_description = $scope.todos[index].description;

            $scope.selectedIndex = index;

        }

        $scope.UpdateTodoClicked = function(){
            //$scope.todos[$scope.selectedIndex].title = $scope.todo_title;
            //$scope.todos[$scope.selectedIndex].description = $scope.todo_description;

            $http.put('/todo/'+$scope.selectedIndex, {title: $scope.todo_title, description : $scope.todo_description} )
                .success(function(response){
                    $scope.todos = response;
                });
        }
    }*/
})();



