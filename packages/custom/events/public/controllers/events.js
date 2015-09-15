'use strict';

/* jshint -W098 */
angular.module('mean.events').controller('eventsController', ['$scope', 'Global', 'events',
  function($scope, Global, events) {
    $scope.global = Global;
    $scope.package = {
      name: 'events'
    };
  }
]);
