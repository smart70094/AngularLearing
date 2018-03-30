define(['angular','ngTable'],function(angular){
	
	var app=angular.module("searchApp",[]);
	
	app.controller("searchCtrl",['$scope','$location','$http',function($scope,$location,$http){
		
		//default variable
		
		//控制查詢div，左右欄位   預設關閉，因為要test
		$scope.showSearchDiv=false;
		
		//選擇房子物件，顯示詳細資料
		$scope.showDetailHoseDiv=false;
		
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
		
		//選擇記錄
		$scope.selectRecord=function(staff_id,name){
			$scope.staff_id=staff_id;
			$scope.name=name;
		};
		
		//選擇房子物
		$scope.selectHouse=function(id){
			$scope.showDetailHoseDiv=true;
			alert(id);
		}
		
		
		$scope.range = function(n) {
		    return new Array(n);
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
					
					$scope.users=response.data;
					
					$scope.dataLength=$scope.users.length;
					
					
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