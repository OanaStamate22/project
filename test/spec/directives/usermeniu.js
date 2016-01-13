'use strict';

describe('Directive: userMeniu', function () {

  // load the directive's module
  beforeEach(module('projectApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<user-meniu></user-meniu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the userMeniu directive');
  }));
});
