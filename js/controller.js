 angular.module('todoapp', ['firebase']);

function todoCtrl($scope, angularFire) {

  var fireData = new Firebase('intense-torch-7748.firebaseIO.com')
  $scope.todos = [];

  angularFire(fireData, $scope, 'todos');

  $scope.addTodo = function() {
    var newTodo = {
      text: $scope.todoText,
      done: false
    };
    $scope.todos.push(newTodo);
    $scope.todoText = '';
  };

  $scope.deleteTodo = function(start) {
    $scope.todos.splice(start, 1)
  };

  $scope.moveTodo = function(index, direction) {
    if (direction === 'up') {
      if (index === 0) {
        return;
      }
      index -= 1;
    }
    if (index === $scope.todos.length -1) {
      return;
    }
    var todo = $scope.todos[index];
    $scope.todos.splice(index + 2, 0, todo);
    $scope.todos.splice(index, 1);
  }
}
