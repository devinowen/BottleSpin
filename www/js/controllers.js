angular.module('BottleSpin.controllers', [])

// Each tab has it's own controller, and one controller per tab

// With the new view caching in Ionic, Controllers are only called
// when they are recreated or on app start, instead of every page change.
// To listen for when this page is active (for example, to refresh data),
// listen for the $ionicView.enter event:
//
//$scope.$on('$ionicView.enter', function(e) {
//});

.controller('HomeCtrl', function($scope, $state, bottleChoice) {
  $scope.bottleSelect = function(currObj) {
    bottleChoice.chooseBottle(currObj);
    $state.go('instructions');
  };

  $scope.random = function() {
    var randChoice = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
    if (randChoice === 1) {
      bottleChoice.chooseBottle('bwbottle.png');
    } else if (randChoice === 2) {
      bottleChoice.chooseBottle('greenbottle.png');
    } else if (randChoice === 3) {
      bottleChoice.chooseBottle('cerveza.png');
    } else if (randChoice === 4) {
      bottleChoice.chooseBottle('glass.png');
    } else if (randChoice === 5) {
      bottleChoice.chooseBottle('can.png');
    } else {
      bottleChoice.chooseBottle('keg.png');
    }
    $state.go('instructions');
  };
})

.controller('InstructCtrl', function($scope, $state) {
  $scope.confirm = function() {
    $state.go('play');
  };
})

.controller('PlayCtrl', function($scope, $state, bottleChoice) {
  $scope.choice = "img/" + bottleChoice.getBottle();
});