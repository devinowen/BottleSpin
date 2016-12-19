// Spin the Bottle App (BottleSpin)

angular.module('BottleSpin', ['ionic', 'BottleSpin.controllers', 'BottleSpin.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider

  .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
    })

  .state('instructions', {
      url: '/instructions',
      templateUrl: 'templates/instructions.html',
      controller: 'InstructCtrl'
    })

  .state('play', {
      url: '/play',
      templateUrl: 'templates/play.html',
      controller: 'PlayCtrl'
    });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});