'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global',
  function($scope, Global) {
    $scope.global = Global;
    $scope.sites = {
      'makeapoint':{
        'name':'makeapoint',
        'text':'Makeapoint is a platform to craft and fine-tune ideas and messages providing a graphical experience which brough an offline methodlogy online',
        'author':'Linnovate',
        'link':'http://www.linnovate.net',
        'image':'/theme/assets/img/makeapoint.png'
      },
      'cactus':{
        'name':'Cactus Intranet',
        'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        'author':'QED42',
        'link':'http://www.qed42.com',
        'image':'/theme/assets/img/cactus.png'
      },
      'newsitem1':{
        'name':'News Item 1',
        'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        'author':'Pat',
        'link':'http://www.qed42.com',
        'image':'/theme/assets/img/newsitem1.jpg'
      },
      'newsitem2':{
        'name':'News Item 2',
        'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        'author':'Pat',
        'link':'http://www.qed42.com',
        'image':'/theme/assets/img/newsitem2.jpg'
      },
      'newsitem3':{
        'name':'News Item 3',
        'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        'author':'James',
        'link':'http://www.qed42.com',
        'image':'/theme/assets/img/newsitem3.jpg'
      },
      'newsitem4':{
        'name':'News Item 4',
        'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        'author':'Pat',
        'link':'http://www.qed42.com',
        'image':'/theme/assets/img/newsitem4.jpg'
      },
      'newsitem5':{
        'name':'News Item 5',
        'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        'author':'Pat',
        'link':'http://www.qed42.com',
        'image':'/theme/assets/img/newsitem5.jpg'
      },
      'newsitem6':{
        'name':'News Item 6',
        'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        'author':'James',
        'link':'http://www.qed42.com',
        'image':'/theme/assets/img/newsitem6.jpg'
      },
      'newsitem7':{
        'name':'News Item 7',
        'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        'author':'Pat',
        'link':'http://www.qed42.com',
        'image':'/theme/assets/img/newsitem7.jpg'
      },
      'newsitem8':{
        'name':'News Item 8',
        'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        'author':'Pat',
        'link':'http://www.qed42.com',
        'image':'/theme/assets/img/newsitem8.png'
      },
      'newsitem9':{
        'name':'News Item 9',
        'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        'author':'James',
        'link':'http://www.qed42.com',
        'image':'/theme/assets/img/newsitem9.jpg'
      }
    };
    $scope.packages = {
      'gmap':{
        'name':'gmap',
        'text':'gmap lets you add geographical information to your applications objects',
        'author':'linnovate',
        'link':'http://www.qed42.com',
        'image':'/theme/assets/img/gmap.png'
      },
      'upload':{
        'name':'Upload',
        'text':'hello text',
        'author':'Linnovate',
        'link':'http://www.linnovate.net',
        'image':'http://cdn.designbyhumans.com/pictures/blog/09-2013/pop-culture-cats/Pop_Culture_Cats_Hamilton_Hipster.jpg'
      },
      'socket':{
        'name':'Socket',
        'text':'Socket.io support',
        'author':'Linnovate',
        'link':'http://www.linnovate.net',
        'image':'http://cdn.designbyhumans.com/pictures/blog/09-2013/pop-culture-cats/Pop_Culture_Cats_Hamilton_Hipster.jpg'
      }
    };

    $scope.$watch(function () {
      for (var i = 0; i < $scope.sites.length; i+=1) {
        if ($scope.sites[i].active) {
          return $scope.sites[i];
        }
      }
    }, function (currentSlide, previousSlide) {
      if (currentSlide !== previousSlide) {
        console.log('currentSlide:', currentSlide);
      }
    });
  }
]);
