angular.module('starter')
.controller('inviteCtrl', function($scope, $ionicModal, $timeout, $http, $state, $ionicHistory) {
	userId = 2;
  	$scope.doLogin = function() {
  		$http.delete('http://10.21.64.160:5000/core/usuario/2/limpar').success(function (response) {
    		console.log(response)
	    }).error(function (err) {
	      console.log(err);
	    });

  		var timeInMs = Date.now();
  		var Indata = {
		  "nome": "raivitor23",
		  "email": timeInMs,
		  "data_nascimento": "2017-08-27",
		  "path_foto": "string",
		  "senha": "123456"
		}

	    $http({
		    url: "http://10.21.64.160:5000/core/usuario",
		    method: "POST",
		    data: Indata,
		    headers: {'Content-Type': 'application/json'}
	    }).success(function (response) {
	    	
	    	$http.get('http://10.21.64.160:5000/core/usuario/'+response.id).success(function (response) {
	    		console.log(response)
	    		user = response
	    		userId = response.id_usuario;
	    		console.log(userId);
	    		$ionicHistory.nextViewOptions({
				  disableBack: true
				});
	    		$state.go('app.tag')
		    }).error(function (err) {
		      console.log(err);
		    });
	    }).error(function (err) {
	      console.log(err);
	    });
  	}

  	$scope.listPref = [
	    {text: 'historia', id: 18},
	    {text: 'arquitetura', id: 2},
	    {text: 'serra', id: 40} ,
	    {text: 'tradicao', id: 42},
	    {text: 'aguas-claras', id: 1},
	    {text: 'ecoturismo', id: 13}
	];

	$scope.checkItems = { }

  	$scope.doTag = function() {
		var array = [];
	    for(i in $scope.checkItems) {
	        if($scope.checkItems[i] == true) {
	        	console.log(i);
	        	$http({
				    url: "http://10.21.64.160:5000/interesse/"+2+"/tag/"+i+"",
				    method: "POST",
				    headers: {'Content-Type': 'application/json '}
			    }).success(function (response) {
			    	console.log(response)
			    }).error(function (err) {
			      console.log(err);
			    });

	            $ionicHistory.nextViewOptions({
				  disableBack: true
				});
	    		$state.go('app.card');
	        }
	    }
	}

});
