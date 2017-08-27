angular.module('starter').controller('CardsCtrl', function ($scope, $http, $ionicLoading, $ionicSideMenuDelegate, TDCardDelegate) {
  $ionicSideMenuDelegate.canDragContent(false);
  var cardTypes = [];
  $ionicLoading.show();
  userId = 2;
  console.log(userId);

  $http.get('http://10.21.64.160:5000/local/cidade/1/usuario/2').success(function (response) {
      console.log(response)
      $ionicLoading.hide();
      $scope.cards = response;
    }).error(function (err) {
      console.log(err);
});


  $scope.cardDestroyed = function(index) {
    console.log("cardDestroyed");
    $scope.cards.splice(index, 1);
  };

  $scope.addCard = function() {
    console.log("addCard");
    $scope.cards.pop();
  }

  $scope.yesCard = function(id) {
    Indata = {"usuario_id": 2,
        "local_id": id,
        "like": true,
        "data": "2017-08-27"
      
    }
    $http({
        url: "http://10.21.64.160:5000/interacao",
        method: "POST",
        data: Indata,
        headers: {'Content-Type': 'application/json'}
      }).success(function (response) {
        console.log(response);
        $scope.addCard();
      }).error(function (err) { });
  };

  $scope.noCard = function(id) {
    Indata = {"usuario_id": 2,
        "local_id": id,
        "like": false,
        "data": "2017-08-27"
      
    }
    $http({
        url: "http://10.21.64.160:5000/interacao",
        method: "POST",
        data: Indata,
        headers: {'Content-Type': 'application/json'}
      }).success(function (response) {
        console.log(response);
        $scope.addCard();
      }).error(function (err) { });
  };
  $scope.toggleLeft = function() {
    console.log("toggleLeft")
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.cardSwipedLeft = function(index) {
    console.log('cardSwipedLeft');
    //$scope.addCard();
  };

  $scope.cardSwipedRight = function(index) { 
    console.log('cardSwipedRight');
    //$scope.addCard();
  };

  $scope.cardPartialSwipe = function(index){
    //console.log("cardPartialSwipe");
  }
})

.controller('CardDetailCtrl', function($scope, $stateParams, $timeout, $ionicModal, $http) {
  id = $stateParams.cardid;


    $http.get('http://10.21.64.160:5000/core/local/9').success(function (response) {
      console.log(response);
      $scope.cidade = response;
    }).error(function (err) {
        console.log(err);
    });


  $ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    $scope.$on('modal.shown', function() {
      console.log('Modal is shown!');
    });

    $scope.imageSrc = 'https://ionicframework.com/img/ionic-logo-blog.png';

    $scope.showImage = function(index) {
      switch(index) {
        case 1:
          $scope.imageSrc = $scope.cidade.instagram_1
          break;
        case 2:
          $scope.imageSrc  = $scope.cidade.instagram_2
          break;
        case 3:
          $scope.imageSrc  = $scope.cidade.instagram_3
          break;
      }
      $scope.openModal();
    }   
}); 