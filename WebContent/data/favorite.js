define(['angular'],function(angular){
	var app=angular.module("favoriteApp",[]);
	app.controller("favoriteCtrl",['$scope',function($scope){
		alert("123");
		$scope.msg="123";
	}]);
});