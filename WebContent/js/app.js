var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when("/data",{
		templateUrl:"data/data.html",
		conroller:"data/data.js"
	});
});

app.controller("myCtrl",['$scope','$location',function($scope,$location){
	$scope.search=function($scope){
		$location.path("/data");
	};
}]);