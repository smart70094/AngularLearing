define(['angular','ngRoute'],function(){
	var app = angular.module('myApp', ["ngRoute"]);

	app.config(function($routeProvider){
		$routeProvider
		.when("/search",{
			templateUrl:"data/search.html",
			conroller:"data/search.js"
		})
		
		.when("/favorite",{
			templateUrl:"data/favorite.html",
			conroller:"data/favorite.js"
		})
		
		.when("/history",{
			templateUrl:"data/history.html",
			conroller:"data/history.js"
		})
		
		.when("/",{
			templateUrl:"data/index.html",
			conroller:"js/app.js"
		})
		;
		
		
	});
	
	
	app.controller("myCtrl",['$scope','$location',function($scope,$location){
		$scope.search=function($scope){
			$location.path("/search");
		};
		
		$scope.favorite=function(){
			$location.path("/favorite");
		};
		
		$scope.history=function(){
			$location.path("/history");
		};
	}]);
	
	return app;
	
});