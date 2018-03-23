define(['angular'],function(angular){
	var app=angular.module("historyApp",[]);
	app.controller("historyCtrl",['$scope',function($scope){
		alert("history");
	}]);
});