define(['angular','ngTable'],function(angular){
	
	var app=angular.module("searchApp",[]);
	
	app.controller("searchCtrl",['$scope','$location','$http',function($scope,$location,$http){
		
		//default variable
		
		//控制查詢div，左右欄位   預設關閉，因為要test
		$scope.showSearchDiv=false;
		
		//傳送訊息給後端，進行查調動作
		$scope.submit=function(){
			$scope.showSearchDiv=false;
			/*
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
					
					$scope.users=response.data;
					
					alert(response.status);
					
				  }, function errorCallback(response) {

					  alert("Failure");
					  
				  });
				  */
		};
		
		
		//清空欄位
		$scope.clear=function(){
			$scope.staff_id="";
			$scope.name="";
		};
		
		$scope.select=function(staff_id,name){
			$scope.staff_id=staff_id;
			$scope.name=name;
		};
		
		
		//查詢全部資料
		$scope.findAll=function(){
			
			$http({
				  method: 'GET',
				  
				  url: 'http://localhost:8080/AngularLearing/AngularServelt',
				  
				  headers: {'Content-Type': "multipart/form-data"},
				  
				  params:{
					  command:"findAll",
				  }
					  
				}).then(function successCallback(response) {

					console.log(response.data.message);
					
					$scope.users=response.data;
					
					
				  }, function errorCallback(response) {

					  alert("Failure");
					  
				  });
		};
			
		// default init IIFE
		(function(){
			$scope.findAll();
		})();
	}]);

});