'use strict';

angular.module('mean.rankings').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('rankings example page', {
      url: '/rankings/example',
      templateUrl: 'rankings/views/index.html'
    });
  }
]);
