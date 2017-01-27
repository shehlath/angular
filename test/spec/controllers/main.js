
'use strict';

describe('Controller:MainCtrl', function () {
  var mainCtrl,
    scope;

  // load the controller's module
  beforeEach(module('angularApp'));
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller,$rootScope, _$http_) {
    scope = $rootScope.$new();

    mainCtrl = $controller('MainCtrl', {
    $scope: scope,
      $http: _$http_
      // place here mocked dependencies
    });

  }));

  it('controller should be defined', function () {
    expect(mainCtrl).toBeDefined();
  });

});
