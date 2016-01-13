'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('RegisterCtrl', function ($scope) {

    console.log("Register Controller");
    $scope.valid = false;
    $scope.registerButton = function () {
      $scope.valid = true;
    };
  });
