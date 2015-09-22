'use strict';

/* jshint -W098 */
angular.module('mean.clans').controller('ClansController', ['$scope', 'Global', 'Clans',
  function($scope, Global, Clans) {
    $scope.global = Global;
    $scope.package = {
      name: 'clans'
    };
  }
]);
