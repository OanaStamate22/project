'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('LoginCtrl', function ($scope, $location) {

    $scope.goToRegister = function(){

      $location.path('/register');


    }


  });
