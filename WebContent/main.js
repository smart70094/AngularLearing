require.config({
  paths: {
    "angular": "//cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular",
    "ngRoute": "//cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-route",
    "bootstrap":"//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap",
    "ngTable":"//cdnjs.cloudflare.com/ajax/libs/ng-table/1.0.0/ng-table",
    
  },
  
  shim:{
	  "angular":{exports:"angular"},
	  "bootstrap":['angular'],
	  "ngRoute":['angular'],
	  "ngTable":['angular'],
  }

	
});

require([
	
	//library
	"angular",
	"ngRoute",
	"bootstrap",
	"ngTable",
	
	
	//self
	"data/search",
	"data/favorite",
	"data/history",

],function(angular,ngRoute,bootstrap){
	
	var app = angular.module('myApp', ["ngRoute"]);
	
	app.config(function($routeProvider){
		$routeProvider
		.when("/search",{
			templateUrl:"data/search.html",
			controllerUrl:"data/searchCtrl.js",
		})
		
		.when("/favorite",{
			templateUrl:"data/favorite.html",
			controllerUrl:"data/favorite.js"
		})
		
		.when("/history",{
			templateUrl:"data/history.html",
			controllerUrl:"data/history.js"
		})
		
		.when("/",{
			templateUrl:"data/index.html",
		})
		;
		
		
	});
	
	
	app.controller("myCtrl",['$scope','$rootScope','$location',function($scope,$rootScope,$location){
		$scope.search=function($scope){
			$rootScope.title="查詢";
			$location.path("/search");
		};
		
		$scope.favorite=function(){
			$rootScope.title="追踨名單";
			$location.path("/favorite");
		};
		
		$scope.history=function(){
			$rootScope.title="歷史記錄";
			$location.path("/history");
		};
	}]);
	
	angular.bootstrap(document, ['myApp','searchApp','favoriteApp','historyApp']);
});