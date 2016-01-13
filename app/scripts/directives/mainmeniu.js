'use strict';

/**
 * @ngdoc directive
 * @name projectApp.directive:mainMeniu
 * @description
 * # mainMeniu
 */
angular.module('projectApp')
  .directive('mainMeniu', function () {
    return {
      templateUrl: 'views/shared/mainmeniu.html',
      link: function(scope, element, attrs, controller){
        $(document).ready(function(){
          $(document).mousemove(function(e){
            TweenLite.to($('.bodylogin'),
              .5,
              { css:
              {
                backgroundPosition: ""+ parseInt(event.pageX/8) + "px "+parseInt(event.pageY/'12')+"px, "+parseInt(event.pageX/'15')+"px "+parseInt(event.pageY/'15')+"px, "+parseInt(event.pageX/'30')+"px "+parseInt(event.pageY/'30')+"px"
              }
              });
          });
        });
      }
    };
  });
