'use strict';

/**
 * @ngdoc directive
 * @name projectApp.directive:userMeniu
 * @description
 * # userMeniu
 */
angular.module('projectApp')
  .directive('userMeniu', function () {
    return {
      templateUrl: 'views/shared/usermeniu.html',

      link: function postLink(scope, element, attrs) {
        element.text('this is the userMeniu directive');
      }
    };
  });
