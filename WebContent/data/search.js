define(['angular'],function(angular){
	
	var app=angular.module("searchApp",[]);
	app.controller("searchCtrl",['$scope','$location','$http',function($scope,$location,$http){
				
		$scope.submit=function(){

			$http({
				  method: 'GET',
				  url: 'http://localhost:8080/AngularLearing/AngularServelt',
				  headers: {'Content-Type': "multipart/form-data"},
				  params:{
					  command:"update",
					  staff_id:this.staff_id,
					  name:this.name
				  }
					  
				}).then(function successCallback(response) {

					console.log(response.data.message);
					
					alert(response.status);
					
				  }, function errorCallback(response) {

					  alert("Failure");
					  
				  });
		};
	}]);

});