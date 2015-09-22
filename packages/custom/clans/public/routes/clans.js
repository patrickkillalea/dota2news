'use strict';

angular.module('mean.clans').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('clans example page', {
      url: '/clans/example',
      templateUrl: 'clans/views/index.html'
    });
  }
]);
