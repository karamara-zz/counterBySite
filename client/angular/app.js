var counterModule = angular.module('counterApp',['ngRoute']);
counterModule.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'views/index.html'
	})
	.when('/detail', {
		templateUrl:'views/detail.html',
	})
	.otherwise({
		templateUrl:'views/index.html'
	})
}])