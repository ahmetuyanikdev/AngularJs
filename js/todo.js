function TodoCtrl($scope){
	$scope.totalTodos=4;
	$scope.todos=[	
				{text:'Learn Angular Js',done:false},
				{text:'Build an App',done:false}
    ];
	
	$scope.addTodo=function(){
		$scope.todos.push({text:$scope.formTodoText,done:false});
		$scope.formTodoText='';
	};
	
	$scope.totalTodos=$scope.todos.length;
	
	$scope.getTotalTodos = function(){
		return $scope.todos.length;
	}
	
	/*
	$scope.clearCompleted = function($scope,$filter){
		$scope.todos =$filter(false)($scope.todos);
	
	}*/
	
	$scope.clearCompleted = function(){
		$scope.todos= _.filter($scope.todos,function(todo){return !todo.done;})
	}
}