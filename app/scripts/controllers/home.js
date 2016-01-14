'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('HomeCtrl', function ($scope,$location) {


    $scope.goToRegister = function(){

      $location.path('/register');
    };
  });
