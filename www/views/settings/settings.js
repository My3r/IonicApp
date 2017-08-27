angular.module('starter')
.controller('settingsCtrl', function($scope, $ionicModal, $timeout,  $http) {
	$http.get('http://10.21.64.160:5000/interacao/2/cidade/1').success(function (response) {
		console.log(response)
		$scope.cidades = response;
    }).error(function (err) {
      console.log(err);
    });
})
;
