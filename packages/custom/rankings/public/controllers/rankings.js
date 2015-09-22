'use strict';

/* jshint -W098 */
angular.module('mean.rankings').controller('RankingsController', ['$scope', 'Global', 'Rankings',
  function($scope, Global, Rankings) {
    $scope.global = Global;
    $scope.package = {
      name: 'rankings'
    };
  }
]);
