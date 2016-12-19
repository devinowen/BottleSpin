angular.module('BottleSpin.services', [])

.service('bottleChoice', function() {
  var bottle = 'string';

  var chooseBottle = function(chosenBottle) {
      bottle = chosenBottle;
  };

  var getBottle = function() {
      return bottle;
  };

  return {
    chooseBottle: chooseBottle,
    getBottle: getBottle
  };

});