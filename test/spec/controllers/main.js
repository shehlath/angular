(function(){
'use strict';

describe('Controller:MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var mainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$http_) {
    scope = $rootScope.$new();
    mainCtrl = $controller('MainCtrl', {
      $scope: scope,
      $http: _$http_
      // place here mocked dependencies
    });
    scope.$apply();
  }));

  it('should be defined', function () {
    expect(mainCtrl).toBeDefined();
  });

});
});
