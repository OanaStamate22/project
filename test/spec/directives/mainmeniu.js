'use strict';

describe('Directive: mainMeniu', function () {

  // load the directive's module
  beforeEach(module('projectApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<main-meniu></main-meniu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mainMeniu directive');
  }));
});
