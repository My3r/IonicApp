// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic.contrib.ui.tinderCards', 'ngImageViewer'])

.run(function($ionicPlatform) {
  var USER = 0;
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.backButton.icon('ion-chevron-left');
  $ionicConfigProvider.backButton.text('');
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('app.login', {
      url: '/login',
      views: {
        'login': {
          templateUrl: 'views/login/login.html',
          controller: 'loginctrl'
        }
      }
    })

  .state('app.card', {
      url: '/card',
      views: {
        'menuContent': {
          templateUrl: 'views/card/card.html',
          controller: 'CardsCtrl'
        }
      }
    })

  .state('app.cardDetail', {
      url: '/cardDetail/:cardid',
      views: {
        'menuContent': {
          templateUrl: 'views/card/cardDetail.html',
          controller: 'CardDetailCtrl'
        }
      }
    })

    .state('app.invite', {
        url: '/invite',
        views: {
          'menuContent': {
            templateUrl: 'views/invite/invite.html',
            controller: 'inviteCtrl'
          }
        }
    })

    .state('app.tag', {
        url: '/tag',
        views: {
          'menuContent': {
            templateUrl: 'views/invite/tag.html',
            controller: 'inviteCtrl'
          }
        }
    })

    .state('app.cadastro', {
        url: '/cadastro',
        views: {
          'menuContent': {
            templateUrl: 'views/invite/cadastro.html',
            controller: 'inviteCtrl'
          }
        }
    })

    .state('app.settings', {
      url: '/settings',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'views/settings/settings.html',
          controller: 'settingsCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/invite');
});
